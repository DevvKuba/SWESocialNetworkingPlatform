namespace API.Entities
{
    public class Blog
    {
        public int Id { get; set; }

        public required string SenderUsername { get; set; }

        public required string Description { get; set; }

        public DateTime PublishedAt { get; private set; }

        public bool IsDeleted { get; set; } = false;

        public int SenderId { get; set; }

        public AppUser Sender { get; set; } = null!;

    }
}
