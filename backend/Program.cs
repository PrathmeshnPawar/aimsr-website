using backend.Data;
using System.Text;
using backend.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OAuth;

using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// Add Database Context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

// Add Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();


// Configure CORS
// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000", "http://192.168.0.113:3000","http://192.168.0.108:3000") // Add mobile-accessible origin
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials();
        });
});


// Load JWT settings
var issuer = configuration["Jwt:Issuer"] ?? "default_issuer";
var audience = configuration["Jwt:Audience"] ?? "default_audience";
var key = Encoding.UTF8.GetBytes(configuration["Jwt:Key"] ?? "default_secret_key");

// Inside Program.cs or Startup.cs ConfigureServices method:
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000") // Corrected origin
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

// Move Authentication and OAuth service registration BEFORE builder.Build()
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = true,
        ValidIssuer = issuer,
        ValidateAudience = true,
        ValidAudience = audience
    };
});

// Add OAuth (Google & GitHub)
builder.Services.AddAuthentication()
    .AddGoogle(googleOptions =>
    {
        googleOptions.ClientId = configuration["Authentication:Google:ClientId"] ?? string.Empty;
        googleOptions.ClientSecret = configuration["Authentication:Google:ClientSecret"] ?? string.Empty;
    })
    .AddGitHub(githubOptions =>
    {
        githubOptions.ClientId = configuration["Authentication:GitHub:ClientId"] ?? string.Empty;
        githubOptions.ClientSecret = configuration["Authentication:GitHub:ClientSecret"] ?? string.Empty;
    });

builder.Services.AddAuthorization();
builder.Services.AddControllers();


var app = builder.Build();

app.UseCors("AllowAll"); // Corrected to use the "AllowAll" policy

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();



app.Urls.Add("http://0.0.0.0:5000"); // Keep for local testing
app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads")),
    RequestPath = "/uploads"
});// Enable serving static files from wwwroot


app.Run();
