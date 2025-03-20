using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Course
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CourseId { get; set; }

        public string? CourseName { get; set; } // Made nullable
        public string? CourseDescription { get; set; } // Made nullable
        public string? CourseDuration { get; set; } // Made nullable
    }
}
