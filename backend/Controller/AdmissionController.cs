using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System;
using System.IO;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Http;

[Route("api/admission")]
[ApiController]
public class AdmissionController : ControllerBase
{
    private readonly AppDbContext _context;

    public AdmissionController(AppDbContext context)
    {
        _context = context;
    }

    // Get all admissions
    [HttpGet]
    public async Task<IActionResult> GetAllAdmissions()
    {
        var admissions = await _context.StudentProfiles.ToListAsync();
        return Ok(admissions);
    }

    // Get admission by ID
    [HttpGet("{id}")]
    public async Task<IActionResult> GetAdmission(int id)
    {
        var admission = await _context.StudentProfiles.FindAsync(id);
        if (admission == null) return NotFound();

        return Ok(new
        {
            admission.Id,
            admission.FullName,
            admission.DateOfBirth,
            admission.Gender,
            admission.Email,
            admission.Address,
            admission.TenthSchoolName,
            admission.TenthBoard,
            admission.TenthYearOfPassing,
            admission.TenthPercentage,
            admission.TwelfthSchoolName,
            admission.TwelfthBoard,
            admission.TwelfthYearOfPassing,
            admission.TwelfthPercentage,
            admission.GraduationCollegeName,
            admission.GraduationUniversity,
            admission.GraduationDegree,
            admission.GraduationPercentage,
            Photo = admission.Photo != null ? Convert.ToBase64String(admission.Photo) : null,
            TenthMarksheet = admission.TenthMarksheet != null ? Convert.ToBase64String(admission.TenthMarksheet) : null,
            TwelfthMarksheet = admission.TwelfthMarksheet != null ? Convert.ToBase64String(admission.TwelfthMarksheet) : null,
            GraduationMarksheet = admission.GraduationMarksheet != null ? Convert.ToBase64String(admission.GraduationMarksheet) : null
        });
    }

    // Submit admission form with document uploads
    [HttpPost]
    public async Task<IActionResult> SubmitAdmissionForm(
        [FromForm] StudentProfile model,
        [FromForm] IFormFile? photo,
        [FromForm] IFormFile? tenthMarksheet,
        [FromForm] IFormFile? twelfthMarksheet,
        [FromForm] IFormFile? graduationMarksheet)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        model.Photo = await ConvertFileToByteArray(photo);
        model.TenthMarksheet = await ConvertFileToByteArray(tenthMarksheet);
        model.TwelfthMarksheet = await ConvertFileToByteArray(twelfthMarksheet);
        model.GraduationMarksheet = await ConvertFileToByteArray(graduationMarksheet);

        _context.StudentProfiles.Add(model);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetAdmission), new { id = model.Id }, model);
    }

    // Update admission
    [HttpPut("update/{id}")]
    public async Task<IActionResult> UpdateAdmission(
        int id,
        [FromForm] StudentProfile model,
        [FromForm] IFormFile? photo)
    {
        if (id != model.Id)
        {
            return BadRequest();
        }

        var admission = await _context.StudentProfiles.FindAsync(id);
        if (admission == null) return NotFound();

        // Preserve existing photo if no new one is uploaded
        if (photo != null)
        {
            admission.Photo = await ConvertFileToByteArray(photo);
        }
        else
        {
            model.Photo = admission.Photo;
        }

        _context.Entry(admission).CurrentValues.SetValues(model);
        await _context.SaveChangesAsync();

        return Ok(admission);
    }

    // Get student photo
    [HttpGet("photo/{id}")]
    public async Task<IActionResult> GetPhoto(int id)
    {
        var admission = await _context.StudentProfiles.FindAsync(id);
        if (admission == null || admission.Photo == null) return NotFound();

        return File(admission.Photo, "image/jpeg");
    }

    // Delete admission
    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteAdmission(int id)
    {
        var admission = await _context.StudentProfiles.FindAsync(id);
        if (admission == null) return NotFound();

        _context.StudentProfiles.Remove(admission);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Admission deleted successfully" });
    }

    // Helper method to convert IFormFile to byte array
    private async Task<byte[]?> ConvertFileToByteArray(IFormFile? file)
    {
        if (file == null) return null;

        using var memoryStream = new MemoryStream();
        await file.CopyToAsync(memoryStream);
        return memoryStream.ToArray();
    }
}
