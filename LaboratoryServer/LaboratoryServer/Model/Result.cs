using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace LaboratoryServer.Model
{
    public class Result
    {
        [Key]
        public int IdResult { get; set; }
        public int IdPatient { get; set; }
        public double Wbc{ get; set; }
        public double Rbc { get; set; }
        public double Pc { get; set; }
        public double Asp { get; set; }
        public string DateOfPerform { get; set; }
        public string Technician { get; set; }

    }

}
