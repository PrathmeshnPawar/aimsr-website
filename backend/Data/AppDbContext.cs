using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<StudentProfile> StudentProfiles { get; set; }
        public DbSet<ContactForm> ContactForms { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // ✅ Ensure Identity tables are properly configured
            base.OnModelCreating(modelBuilder);

            // 🔹 StudentProfile & Student Relationship
            modelBuilder.Entity<StudentProfile>()
                .HasOne(sp => sp.Student)
                .WithOne(s => s.StudentProfile)
                .HasForeignKey<StudentProfile>(sp => sp.StudentId) // Foreign key in StudentProfile
                .OnDelete(DeleteBehavior.Cascade);

            // 🔹 Student & Course Relationship
            modelBuilder.Entity<Student>()
                .HasOne(s => s.Course)
                .WithMany()
                .HasForeignKey(s => s.CourseId)
                .OnDelete(DeleteBehavior.Restrict); // Prevent accidental cascading deletes

            // 🔹 Required fields
            modelBuilder.Entity<Student>()
                .Property(s => s.Name)
                .IsRequired();

            modelBuilder.Entity<Course>()
                .Property(c => c.CourseName)
                .IsRequired();
        }
    }
}
