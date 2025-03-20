using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models // Or AimsrCollegeApi.Models
{
    public class Student
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public string? FirstName { get; set; } // Made nullable
        public string? LastName { get; set; } // Made nullable
        public string? Email { get; set; } // Made nullable
        public int CourseId { get; set; }
        public Course? Course { get; set; } // Changed from Courses to Course
        public int StudentProfileId { get; set; } // Foreign key linking to StudentProfile

              public StudentProfile? StudentProfile { get; set; } // Navigation property
        public string? Name { get; set; } // Added Name property
    }
}
