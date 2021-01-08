using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LaboratoryServer.Model
{
    public class UserModel
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
        //dodać PESEL
        public long Pesel{ get; set; }

    }
}
