using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceWebApp.Models
{
    public class Product
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(200, ErrorMessage = "{0} length must be at least {2} characters.", MinimumLength = 2)]
        public string Name { get; set; }

        [Required]
        [StringLength(1000, ErrorMessage = "{0} length must be at least {2} characters.", MinimumLength = 5)]
        public string Description { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:0}")]
        public decimal Price { get; set; }

        [Required]
        public string ImageUrl { get; set; }

    }
}
