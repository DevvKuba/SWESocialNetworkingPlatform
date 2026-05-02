namespace API.Entities
{
    public class BlogComment
    {
        public int Id { get; set; }

        public required string Content { get; set; }

        public int UserId { get; set; }

        public AppUser User { get; set; } = null!;

        public int BlogId { get; set; }

        public Blog Blog { get; set; } = null!;
    }
}
