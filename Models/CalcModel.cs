using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment_2_Josiah_Sarles.Models
{
    public class CalcModel
    {
        [Required]

        [Range(0, 100, ErrorMessage = "Percentage must be between $0 and $100")]
        public int assignment { get; set; }

        [Required]

        [Range(0, 100, ErrorMessage = "Percentage must be between $0 and $100")]
        public int group { get; set; }

        [Required]

        [Range(0, 100, ErrorMessage = "Percentage must be between $0 and $100")]
        public int quiz { get; set; }

        [Required]

        [Range(0, 100, ErrorMessage = "Percentage must be between $0 and $100")]
        public int exam { get; set; }

        [Required]

        [Range(0, 100, ErrorMessage = "Percentage must be between $0 and $100")]
        public int intex { get; set; }
    }
}
