using System.Reflection.Metadata.Ecma335;

namespace API.Entities
{
    public class BlogLike
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public AppUser User { get; set; } = null!;

        public int BlogId { get; set; }

        public Blog Blog { get; set; } = null!;
    }
}
