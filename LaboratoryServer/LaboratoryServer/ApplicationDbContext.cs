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
                new Result { IdPatient = 1, Asp = 99, DateOfPerform = "12/12/12", IdResult = 1, Pc = 345, Rbc = 99, Technician = "dr Mirosław Mirosławski", Wbc = 12 },
                new Result { IdPatient = 2, Asp = 1, DateOfPerform = "11/11/11", IdResult = 2, Pc = 123, Rbc = 99, Technician = "dr AAAAAA AAAAAA", Wbc = 122 },
                new Result { IdPatient = 3, Asp = 22222, DateOfPerform = "12/01/09", IdResult = 3, Pc = 6544, Rbc = 99, Technician = "dr Placeholder", Wbc = 132 });
        }
        public DbSet<Result> Results { get; set; }
    }

}