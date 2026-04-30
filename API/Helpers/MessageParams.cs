namespace API.Helpers
{
    public class MessageParams : PaginationParams
    {
        public int Id { get; set; }

        public string Container { get; set; } = "Unread";
    }
}
