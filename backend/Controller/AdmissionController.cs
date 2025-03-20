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
            Photo = admission.Photo != null ? Convert.ToBase64String(admission.Photo) : null
        });
    }

    // Submit admission form with photo upload
    [HttpPost]
    public async Task<IActionResult> SubmitAdmissionForm([FromForm] StudentProfile model, [FromForm] IFormFile photo)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        if (photo != null)
        {
            using (var memoryStream = new MemoryStream())
            {
                await photo.CopyToAsync(memoryStream);
                model.Photo = memoryStream.ToArray(); // Store binary data
            }
        }

        _context.StudentProfiles.Add(model);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetAdmission), new { id = model.Id }, model);
    }

    // Update admission
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateAdmission(int id, [FromForm] StudentProfile model, [FromForm] IFormFile photo)
    {
        var admission = await _context.StudentProfiles.FindAsync(id);
        if (admission == null) return NotFound();

        // Preserve old photo if no new photo is provided
        if (photo != null)
        {
            using (var memoryStream = new MemoryStream())
            {
                await photo.CopyToAsync(memoryStream);
                admission.Photo = memoryStream.ToArray();
            }
        }

        _context.Entry(admission).CurrentValues.SetValues(model);
        await _context.SaveChangesAsync();

        return Ok(admission);
    }

    // Get photo as Base64 (since it's stored in the database)
    [HttpGet("photo/{id}")]
    public async Task<IActionResult> GetPhoto(int id)
    {
        var admission = await _context.StudentProfiles.FindAsync(id);
        if (admission == null || admission.Photo == null) return NotFound();

        return File(admission.Photo, "image/jpeg");
    }

    // Delete admission
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAdmission(int id)
    {
        var admission = await _context.StudentProfiles.FindAsync(id);
        if (admission == null) return NotFound();

        _context.StudentProfiles.Remove(admission);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Admission deleted successfully" });
    }
}
