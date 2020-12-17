using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LaboratoryServer.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Wkhtmltopdf.NetCore;

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


        //[Authorize]
        [HttpGet]
        [Route("Get")]
        public async Task<IActionResult> GetResult()
        {
            var labRes = new Result
            {
                IdResult = 1,
                Wbc = 120,
                Rbc = 430,
                Pc = 99,
                Asp = 12,
                DateOfPerform = "12/03/2020",
                Technician = "dr Remigiusz Nałkowski"
            };
            return await _generatePdf.GetPdf("Views/Result/Result.cshtml", labRes);
        }


    }
}
