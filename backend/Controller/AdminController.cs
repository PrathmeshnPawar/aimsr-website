using System;
using System.IO;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AdminController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetDashboard()
        {
            int totalStudents = await _context.StudentProfiles.CountAsync();
            return Ok(new { message = "Admin dashboard data", totalStudents });
        }

        [HttpPost("students/register")]
        public async Task<IActionResult> RegisterStudent([FromBody] RegisterModel model)
        {
            if (string.IsNullOrEmpty(model.FullName) || string.IsNullOrEmpty(model.Email) ||
                string.IsNullOrEmpty(model.Password) || string.IsNullOrEmpty(model.MobileNumber))
            {
                return BadRequest("All required fields must be filled");
            }

            // Inside RegisterStudent:
            var student = new StudentProfile
            {
                FullName = model.FullName, // Changed from Name to FullName
                Email = model.Email
            };


            _context.StudentProfiles.Add(student);
            await _context.SaveChangesAsync();

            model.StudentProfileId = student.StudentId;
            model.StudentProfile = student;
            model.IsApproved = false;
            _context.RegisterModels.Add(model);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Student registered successfully", student });
        }

        [HttpGet("students")]
        public async Task<IActionResult> GetStudents()
        {
            // Inside GetStudents:
            var students = await _context.StudentProfiles
                .Select(s => new { s.StudentId, s.FullName, s.Email }) // Changed s.Name to s.FullName
                .ToListAsync();

            return Ok(students);
        }

        [HttpGet("students/{id}")]
        public async Task<IActionResult> GetStudent(int id)
        {
            var student = await _context.StudentProfiles.FindAsync(id);
            if (student == null) return NotFound();
            // Inside GetStudent:
            return Ok(new { student.StudentId, student.FullName, student.Email, student.Photo }); // Changed student.Name
        }

        [HttpPut("students/{id}")]
        public async Task<IActionResult> UpdateStudent(
            int id,
            [FromForm] string name,
            [FromForm] string email,
            [FromForm] IFormFile? photo)
        {
            var student = await _context.StudentProfiles.FindAsync(id);
            if (student == null) return NotFound();

            // Inside UpdateStudent:
            student.FullName = name ?? student.FullName; // Changed student.Name to student.FullName
            student.Email = email ?? student.Email;

            if (photo != null)
            {
                using var memoryStream = new MemoryStream();
                await photo.CopyToAsync(memoryStream);
                student.Photo = memoryStream.ToArray();
            }

            await _context.SaveChangesAsync();
            return Ok(new { message = "Student updated successfully", student });
        }

        [HttpDelete("students/{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _context.StudentProfiles.FindAsync(id);
            if (student == null) return NotFound();

            _context.StudentProfiles.Remove(student);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Student record deleted successfully" });
        }

        [HttpGet("stats")]
        public async Task<IActionResult> GetStats()
        {
            int totalStudents = await _context.StudentProfiles.CountAsync();
            return Ok(new { totalStudents });
        }

        [HttpPost("settings")]
        public async Task<IActionResult> UpdateSettings([FromBody] object settings)
        {
            // Future implementation
            return Ok(new { message = "Settings updated" });
        }
    }
}
