namespace backend.Models;
public class LoginModel
{
    public string Email { get; set; } = string.Empty; // Fix null warning
    public string Password { get; set; } = string.Empty; // Fix null warning
}
