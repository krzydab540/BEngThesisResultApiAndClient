using Microsoft.EntityFrameworkCore.Migrations;

namespace LaboratoryServer.Migrations
{
    public partial class Initial : Migration
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
                    WBC = table.Column<double>(type: "float", nullable: false),
                    RBC = table.Column<double>(type: "float", nullable: false),
                    HGB = table.Column<double>(type: "float", nullable: false),
                    HCT = table.Column<double>(type: "float", nullable: false),
                    Platelets = table.Column<double>(type: "float", nullable: false),
                    Segs = table.Column<double>(type: "float", nullable: false),
                    Blasts = table.Column<double>(type: "float", nullable: false),
                    DateOfPerform = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Technician = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Results", x => x.IdResult);
                });

            migrationBuilder.CreateTable(
                name: "UserModels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModels", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Results",
                columns: new[] { "IdResult", "Blasts", "DateOfPerform", "HCT", "HGB", "IdPatient", "Platelets", "RBC", "Segs", "Technician", "WBC" },
                values: new object[,]
                {
                    { 1, 99.0, "01/04/12", 35.0, 4.4000000000000004, 1, 1.3, 3.3999999999999999, 55.0, "dr Paweł Jakubowski", 1.3999999999999999 },
                    { 2, 19.0, "09/11/2019", 33.0, 7.4000000000000004, 1, 2.2999999999999998, 2.3999999999999999, 75.0, "de Przemysław Czerwiński", 1.3 },
                    { 3, 77.0, "12/12/12", 45.0, 8.4000000000000004, 1, 2.3999999999999999, 4.4000000000000004, 57.0, "dr Kamil Kołecki", 1.7 },
                    { 4, 89.0, "12/05/12", 45.0, 4.4000000000000004, 1, 4.2999999999999998, 4.4000000000000004, 54.0, "dr Łukasz Szymczak", 2.3999999999999999 },
                    { 5, 99.0, "01/01/12", 35.0, 4.4000000000000004, 2, 1.3, 3.3999999999999999, 55.0, "dr Radosław Mirosław", 1.3999999999999999 }
                });

            migrationBuilder.InsertData(
                table: "UserModels",
                columns: new[] { "Id", "Email", "Name", "Password", "Surname" },
                values: new object[,]
                {
                    { 1, "pierwszy@email.com", "Pierwszy", "pierwszy", "Użytkownik" },
                    { 2, "drugi@email.com", "Drugi", "drugi", "Użytkownik" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Results");

            migrationBuilder.DropTable(
                name: "UserModels");
        }
    }
}
