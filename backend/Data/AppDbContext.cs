using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<StudentProfile> StudentProfiles { get; set; }
        public DbSet<ContactForm> ContactForms { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships
            modelBuilder.Entity<StudentProfile>()
                .HasOne(sp => sp.Student)
                .WithOne(s => s.StudentProfile)
                .HasForeignKey<Student>(s => s.StudentProfileId) // Foreign key in Student
                .OnDelete(DeleteBehavior.Cascade); // Ensure cascading delete if needed

            modelBuilder.Entity<Student>()
                .HasOne(s => s.Course)
                .WithMany()
                .HasForeignKey(s => s.CourseId);

            // Configure required fields
            modelBuilder.Entity<Student>()
                .Property(s => s.Name)
                .IsRequired();

            modelBuilder.Entity<Course>()
                .Property(c => c.CourseName)
                .IsRequired();
        }
    }
}
