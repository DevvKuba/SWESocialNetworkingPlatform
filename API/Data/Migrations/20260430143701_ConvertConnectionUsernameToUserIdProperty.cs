using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class ConvertConnectionUsernameToUserIdProperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Username",
                table: "Connections");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Connections",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Connections");

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "Connections",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
