using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LaboratoryServer.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Wkhtmltopdf.NetCore;
using System.Text.Json;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using System.Reflection;
//using Newtonsoft.Json;

namespace LaboratoryServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResultController : ControllerBase
    {
        readonly IGeneratePdf _generatePdf;
        private readonly ApplicationDbContext _context;

        public ResultController(ApplicationDbContext context, IGeneratePdf generatePdf)
        {
            _generatePdf = generatePdf;
            _context = context;
        }


        ////[Authorize]
        //[HttpGet]
        //[Route("Get")]
        //public async Task<IActionResult> GetResult()
        //{
        //    var labRes = new Result
        //    {
        //        IdResult = 1,
        //        Wbc = 120,
        //        Rbc = 430,
        //        Pc = 99,
        //        Asp = 12,
        //        DateOfPerform = "12/03/2020",
        //        Technician = "dr Remigiusz Nałkowski"
        //    };
        //    return await _generatePdf.GetPdf("Views/Result/Result.cshtml", labRes);
        //}








        //[Authorize]
        [HttpGet]
        [Route("Get")]
        public IActionResult GetResult()
        {
            // foreach item where idpatient = idpatient add to list

            List<Result> resultList = new List<Result>
            {
                //new Result{IdResult = 1, IdPatient=1 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="1/12/12", Technician="dr Paweł Jakubowski" },
                //new Result{IdResult = 2, IdPatient=2 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="2/12/12", Technician="dr Przemysław Czerwiński" },
                //new Result{IdResult = 3, IdPatient=3 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="3/12/12", Technician="dr Kamil Kołecki" },
                //new Result{IdResult = 4, IdPatient=4 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="4/12/12", Technician="dr Łukasz Szymczak" },
                //new Result{IdResult = 5, IdPatient=5 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="5/12/12", Technician="dr Radosław Mirosław" }
            };


            //var jsonList = JsonSerializer.Serialize(resultList);
            var jsonList = JsonConvert.SerializeObject(resultList);

            IActionResult response = Unauthorized();
            response = Ok(new { results = resultList });

            return response;
        }

        [HttpGet]
        [Route("Get/1")]
        public IActionResult GetSpecificResult()
        {
            var labRes = new Result
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
            };

            string templateFile = System.IO.File.ReadAllText("D:/Fork/BEngThesisResultApiAndClient/BEngThesisResultApiAndClient/LaboratoryServer/LaboratoryServer/Views/Result/BloodResult.html");

            PropertyInfo[] infos = labRes.GetType().GetProperties();
            Dictionary<string, string> dictionary = new Dictionary<string, string>();

            foreach (PropertyInfo info in infos)
            {
                dictionary.Add(info.Name, info.GetValue(labRes, null).ToString());
            }

            foreach (var property in dictionary)
            {
                templateFile = templateFile.Replace("@Model." + property.Key, property.Value);
            }

            templateFile = templateFile.Replace("\n", "").Replace("\r", "");

            IActionResult response = Unauthorized();
            response = Ok(new { htmlResult = templateFile });

            return response;
        }




    }
}
