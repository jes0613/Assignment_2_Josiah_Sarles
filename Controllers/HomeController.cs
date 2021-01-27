using Assignment_2_Josiah_Sarles.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Assignment_2_Josiah_Sarles.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Calc")]
        public IActionResult Calc()
        {
            return View();
        }

        [HttpPost("Calc")]
        public IActionResult Calc(CalcModel model)
        {
            return View();
        }
    }
}
