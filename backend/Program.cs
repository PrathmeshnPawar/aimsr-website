using Microsoft.EntityFrameworkCore;
using backend.Data; // Ensure this namespace is correct
using System.Security.Cryptography.X509Certificates;

var builder = WebApplication.CreateBuilder(args);

// Load HTTPS certificate
var httpsCertPath = "/https/aspnetcore-https.pfx"; // Using .pfx instead of .pem
var httpsCertPassword = "root"; // Set this in an environment variable for security

// Configure Kestrel to use HTTPS
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5000); // HTTP
    options.ListenAnyIP(5001, listenOptions =>
    {
        listenOptions.UseHttps(new X509Certificate2(httpsCertPath, httpsCertPassword));
    });
});

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure PostgreSQL database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Enable CORS
app.UseCors("AllowAll");

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
