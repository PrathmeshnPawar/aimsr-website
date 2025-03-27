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
        public DbSet<RegisterModel> RegisterModels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // ✅ Ensure Identity tables are properly configured
            base.OnModelCreating(modelBuilder);

            // 🔹 StudentProfile Key Configuration
            modelBuilder.Entity<StudentProfile>()
                .HasKey(sp => sp.StudentId); // Use StudentId as primary key

            // 🔹 Student & Course Relationship
            modelBuilder.Entity<Student>()
                .HasOne(s => s.Course)
                .WithMany()
                .HasForeignKey(s => s.CourseId)
                .OnDelete(DeleteBehavior.Restrict); // Prevent accidental cascading deletes

            // 🔹 Required fields
            modelBuilder.Entity<Student>()
                .Property(s => s.FirstName)
                .IsRequired();

            modelBuilder.Entity<Course>()
                .Property(c => c.CourseName)
                .IsRequired();
        }
    }
}
