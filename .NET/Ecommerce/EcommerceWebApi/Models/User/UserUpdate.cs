using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceWebApi.Models.User
{
    public class UserUpdate
    {
        [Required]
        [StringLength(200, ErrorMessage = "{0} length must be at least {2} characters.", MinimumLength = 2)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(200, ErrorMessage = "{0} length must be at least {2} characters.", MinimumLength = 2)]
        public string LastName { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", ErrorMessage = "Invalid email format")]
        public string Email { get; set; }

        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$", ErrorMessage = "The password should have 1 lower case, 1 upper case, 1 number, 1 special character and minimum 8 character")]
        public string Password { get; set; }
    }
}
