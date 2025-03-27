using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class StudentProfile
    {
        [Key]
        public int StudentId { get; set; } // Primary Key

        // Personal Details
        public string? FullName { get; set; } = string.Empty;
        public DateTimeOffset? DateOfBirth { get; set; }
        public string? Gender { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public string? Address { get; set; } = string.Empty;

        // Academic Details - Tenth
        public string? TenthSchoolName { get; set; } = string.Empty;
        public string? TenthBoard { get; set; } = string.Empty;
        public string? TenthYearOfPassing { get; set; } = string.Empty;
        public string? TenthPercentage { get; set; } = string.Empty;

        // Academic Details - Twelfth
        public string? TwelfthSchoolName { get; set; } = string.Empty;
        public string? TwelfthBoard { get; set; } = string.Empty;
        public string? TwelfthYearOfPassing { get; set; } = string.Empty;
        public string? TwelfthPercentage { get; set; } = string.Empty;

        // Academic Details - Graduation
        public string? GraduationCollegeName { get; set; } = string.Empty;
        public string? GraduationUniversity { get; set; } = string.Empty;
        public string? GraduationDegree { get; set; } = string.Empty;
        public string? GraduationPercentage { get; set; } = string.Empty;

        // Documents
        public byte[]? Photo { get; set; }
        public byte[]? TenthMarksheet { get; set; }
        public byte[]? TwelfthMarksheet { get; set; }
        public byte[]? GraduationMarksheet { get; set; }
    }
}
