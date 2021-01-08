using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using LaboratoryServer.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text.Json;
using System.Text.Json.Serialization;




namespace LaboratoryServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;
        private readonly ApplicationDbContext _context;

        public LoginController(ApplicationDbContext context, IConfiguration config)
        {
            _config = config;
            _context = context;
        }

        [HttpPost]
        public IActionResult Login([FromBody] UserModel login)
        {
            IActionResult response = Unauthorized();

            var user = AuthenticateUser(login);
            if (user != null)
            {
                var tokenStr = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenStr, userId = user.Id });
            }
            return response;
        }

        private UserModel AuthenticateUser(UserModel login)
        {

            UserModel user = null;
            user = _context.UserModels.SingleOrDefault(user => user.Email == login.Email && user.Password == login.Password);

            return user;
        }

        private string GenerateJSONWebToken(UserModel userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                //new Claim(JwtRegisteredClaimNames.Sub, userInfo.Username,
                new Claim(JwtRegisteredClaimNames.Email, userInfo.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            var encodeToken = new JwtSecurityTokenHandler().WriteToken(token);
            return encodeToken;
        }

        [Authorize]
        [HttpPost("Post")]
        public string Post()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            IList<Claim> claim = identity.Claims.ToList();
            var email = claim[0].Value;
            return "Welcome to: " + email;
        }


        [Authorize]
        [HttpGet("GetValue")]
        public ActionResult<IEnumerable<string>> GetArray()
        {
            return new string[] { "Return", "these", "wooooooo vakues" };
        }

    }
}
