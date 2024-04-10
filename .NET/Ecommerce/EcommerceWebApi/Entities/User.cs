using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceWebApi.Entities
{
    [Index(nameof(Email), IsUnique = true)]
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string FirstName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName = "varchar(200)")]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

    }
}
