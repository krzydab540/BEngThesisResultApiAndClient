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
                new Result{IdResult = 1, IdPatient=1 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="1/12/12", Technician="dr Mirosław Ogórek" },
                new Result{IdResult = 2, IdPatient=2 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="2/12/12", Technician="dr Hilary Stary" },
                new Result{IdResult = 3, IdPatient=3 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="3/12/12", Technician="dr Antoni Grzybiński" },
                new Result{IdResult = 4, IdPatient=4 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="4/12/12", Technician="dr Wacław Tablica" },
                new Result{IdResult = 5, IdPatient=5 ,Wbc=1, Rbc=1, Pc=1,  Asp=1, DateOfPerform="5/12/12", Technician="dr Tadeusz Wajcha-Przełóż" }
            };


            var jsonList =  JsonSerializer.Serialize(resultList);

            IActionResult response = Unauthorized();
            response = Ok(new { results = resultList });

            return response;
        }


    }
}
