using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using LaboratoryServer.Model;

namespace LaboratoryServer
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Result>().HasData(
                new Result
                {
                    IdPatient = 1,
                    IdResult = 1,
                    WBC = 1.4,
                    RBC = 3.4,
                    HGB = 4.4,
                    HCT = 35,
                    Platelets = 1.3,
                    Segs = 55,
                    Blasts = 99,
                    Technician = "dr Paweł Jakubowski",
                    DateOfPerform = "01/04/12",
                },
                new Result
                {
                    IdPatient = 1,
                    IdResult = 2,
                    WBC = 1.3,
                    RBC = 2.4,
                    HGB = 7.4,
                    HCT = 33,
                    Platelets = 2.3,
                    Segs = 75,
                    Blasts = 19,
                    Technician = "de Przemysław Czerwiński",
                    DateOfPerform = "09/11/2019",
                },
                new Result
                {
                    IdPatient = 1,
                    IdResult = 3,
                    WBC = 1.7,
                    RBC = 4.4,
                    HGB = 8.4,
                    HCT = 45,
                    Platelets = 2.4,
                    Segs = 57,
                    Blasts = 77,
                    Technician = "dr Kamil Kołecki",
                    DateOfPerform = "12/12/12",
                },
                new Result
                {
                    IdPatient = 1,
                    IdResult = 4,
                    WBC = 2.4,
                    RBC = 4.4,
                    HGB = 4.4,
                    HCT = 45,
                    Platelets = 4.3,
                    Segs = 54,
                    Blasts = 89,
                    Technician = "dr Łukasz Szymczak",
                    DateOfPerform = "12/05/12",
                },
                new Result
                {
                    IdPatient = 2,
                    IdResult = 5,
                    WBC = 1.4,
                    RBC = 3.4,
                    HGB = 4.4,
                    HCT = 35,
                    Platelets = 1.3,
                    Segs = 55,
                    Blasts = 99,
                    Technician = "dr Radosław Mirosław",
                    DateOfPerform = "01/01/12",
                });

            builder.Entity<UserModel>().HasData(
                new UserModel
                {
                    Id = 1,
                    Name = "Pierwszy",
                    Surname = "Użytkownik",
                    Email = "pierwszy@email.com",
                    Password = "pierwszy"
                },
                new UserModel
                {
                    Id = 2,
                    Name = "Drugi",
                    Surname = "Użytkownik",
                    Email = "drugi@email.com",
                    Password = "drugi"
                });
        }
        public DbSet<Result> Results { get; set; }
        public DbSet<UserModel> UserModels { get; set; }

    }

}