namespace API.DTO_s
{
    public class CreateMessageDto
    {
        public required int RecipientId { get; set; }

        public required string Content { get; set; }
    }
}
