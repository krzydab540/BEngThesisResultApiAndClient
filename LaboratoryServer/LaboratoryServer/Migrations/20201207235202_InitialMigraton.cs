using Microsoft.EntityFrameworkCore.Migrations;

namespace LaboratoryServer.Migrations
{
    public partial class InitialMigraton : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Results",
                columns: table => new
                {
                    IdResult = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdPatient = table.Column<int>(type: "int", nullable: false),
                    Wbc = table.Column<double>(type: "float", nullable: false),
                    Rbc = table.Column<double>(type: "float", nullable: false),
                    Pc = table.Column<double>(type: "float", nullable: false),
                    Asp = table.Column<double>(type: "float", nullable: false),
                    DateOfPerform = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Technician = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Results", x => x.IdResult);
                });

            migrationBuilder.InsertData(
                table: "Results",
                columns: new[] { "IdResult", "Asp", "DateOfPerform", "IdPatient", "Pc", "Rbc", "Technician", "Wbc" },
                values: new object[] { 1, 99.0, "12/12/12", 1, 345.0, 99.0, "dr Mirosław Mirosławski", 12.0 });

            migrationBuilder.InsertData(
                table: "Results",
                columns: new[] { "IdResult", "Asp", "DateOfPerform", "IdPatient", "Pc", "Rbc", "Technician", "Wbc" },
                values: new object[] { 2, 1.0, "11/11/11", 2, 123.0, 99.0, "dr AAAAAA AAAAAA", 122.0 });

            migrationBuilder.InsertData(
                table: "Results",
                columns: new[] { "IdResult", "Asp", "DateOfPerform", "IdPatient", "Pc", "Rbc", "Technician", "Wbc" },
                values: new object[] { 3, 22222.0, "12/01/09", 3, 6544.0, 99.0, "dr Placeholder", 132.0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Results");
        }
    }
}
