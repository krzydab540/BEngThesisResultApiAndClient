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
        [HttpPost]
        public IActionResult GetResult([FromBody] idObject idObj)
        {
            var resultList = _context.Results.Where(res => res.IdPatient == idObj.idPatient);
            var jsonList = JsonConvert.SerializeObject(resultList);

            IActionResult response = Unauthorized();
            response = Ok(new { results = resultList });

            return response;
        }

        [HttpPost]
        [Route("Specific")]
        public IActionResult GetSpecificResult([FromBody] idObject idObj)
        {
            Result labRes = null;
            labRes = _context.Results.FirstOrDefault(result => result.IdResult == idObj.idResult);

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
        public class idObject
        {
            public int idPatient;
            public int idResult;
        }

    }



}
