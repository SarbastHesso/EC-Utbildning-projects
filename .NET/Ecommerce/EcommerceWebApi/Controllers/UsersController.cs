using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceWebApi.Data;
using EcommerceWebApi.Entities;
using EcommerceWebApi.Models.User;
using Newtonsoft.Json;

namespace EcommerceWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly SqlContext _context;

        public UsersController(SqlContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserGet>>> GetUsers()
        {
            var users = new List<UserGet>();

            if (users == null)
            {
                return NotFound();
            }

            foreach (var user in await _context.Users.ToListAsync())
            {
                users.Add(new UserGet
                {
                    Id = user.Id,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email
                });
            }
            return users;
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserGet>> GetUser(int id)
        {
            var _user = await _context.Users.FindAsync(id);

            var user = new UserGet
            {
                Id = _user.Id,
                FirstName = _user.FirstName,
                LastName = _user.LastName,
                Email = _user.Email
            };

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, UserUpdate model)
        {
            var user = await _context.Users.Where(x => x.Id == id).FirstOrDefaultAsync();
            
            if (user == null)
            {
                return BadRequest();
            }
            else
            {
                if (!string.IsNullOrEmpty(model.FirstName) && !string.IsNullOrEmpty(model.LastName) && !string.IsNullOrEmpty(model.Email) && !string.IsNullOrEmpty(model.Password))
                {
                    user.FirstName = model.FirstName;
                    user.LastName = model.LastName;
                    user.Email = model.Email;
                    user.Password = model.Password;

                    _context.Entry(user).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!UserExists(id))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }

                    return NoContent();
                }

                return new BadRequestObjectResult(JsonConvert.SerializeObject(new { message = $"All required field must contain values." }));
            }
            
        }

        /*
        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }
        */

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
