using System.ComponentModel.DataAnnotations;
using System;

namespace backend.Models;

public class RegisterModel
{
    [Key]
    public int Id { get; set; }

    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; }
    public string MobileNumber { get; set; } = string.Empty;
    public bool IsApproved { get; set; } = false;

    public int StudentProfileId { get; set; }
    public StudentProfile StudentProfile { get; set; }
}
