using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace LaboratoryServer.Model
{
    public class Result
    {
        [Key][Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdResult { get; set; }
        [ForeignKey("Id")][Required]
        public int IdPatient { get; set; }
        public double WBC{ get; set; }
        public double RBC { get; set; }
        public double HGB { get; set; }
        public double HCT { get; set; }
        public double Platelets { get; set; }
        public double Segs { get; set; }
        public double Blasts { get; set; }
        [Required]
        public string DateOfPerform { get; set; }
        [Required]
        public string Technician { get; set; }

    }

}
