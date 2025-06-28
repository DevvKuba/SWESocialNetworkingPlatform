using System.ComponentModel.DataAnnotations;

namespace API.DTO_s
{
    public class RegisterDto
    {
        [Required] public string Username { get; set; } = string.Empty;

        [Required] public string? KnownAs { get; set; }

        [Required] public string? Gender { get; set; }

        [Required] public string? DateOfBirth { get; set; }

        [Required] public string? Specialization { get; set; }

        [Required] public int? yearsOfExperience { get; set; }


        [Required]
        [StringLength(16, MinimumLength = 4)]
        public string Password { get; set; } = string.Empty;
    }
}
