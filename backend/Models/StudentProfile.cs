using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class StudentProfile
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int StudentId { get; set; }
        [ForeignKey("StudentId")]
        public Student? Student { get; set; }

        // Personal Details
        public string? FullName { get; set; }
        public string? DateOfBirth { get; set; }
        public string? Gender { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }

        // Academic Details - Tenth
        public string? TenthSchoolName { get; set; }
        public string? TenthBoard { get; set; }
        public string? TenthYearOfPassing { get; set; }
        public string? TenthPercentage { get; set; }

        // Academic Details - Twelfth
        public string? TwelfthSchoolName { get; set; }
        public string? TwelfthBoard { get; set; }
        public string? TwelfthYearOfPassing { get; set; }
        public string? TwelfthPercentage { get; set; }

        // Academic Details - Graduation
        public string? GraduationCollegeName { get; set; }
        public string? GraduationUniversity { get; set; }
        public string? GraduationDegree { get; set; }
        public string? GraduationPercentage { get; set; }

        // Documents
        public byte[]? Photo { get; set; }
                public byte[]? TenthMarksheet { get; set; }
                public byte[]? TwelfthMarksheet { get; set; }
                public byte[]? GraduationMarksheet { get; set; }

    }
}
