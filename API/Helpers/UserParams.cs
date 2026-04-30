namespace API.Helpers
{
    public class UserParams : PaginationParams
    {
        public string? Gender { get; set; }

        public int? CurrentUserId { get; set; }

        public int MinExperience { get; set; } = 1;

        public int MaxExperience { get; set; } = 15;

        public string OrderBy { get; set; } = "lastActive";

    }
}
