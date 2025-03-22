namespace backend.Models;

public class RegisterModel
{
    public string FullName { get; set; } = string.Empty; // Fix null warning
    public string Email { get; set; } = string.Empty; // Fix null warning
    public string Password { get; set; } = string.Empty; // Fix null warning
}
