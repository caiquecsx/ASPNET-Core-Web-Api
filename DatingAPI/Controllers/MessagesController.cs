using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingAPI.Data;
using DatingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly DataContext _context;

        public MessagesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetMessages()
        { 
            return Ok(await _context.Messages
                .ToListAsync());
        }
         
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMessage(int id)
        {
            return Ok(await _context.Messages
                .FirstOrDefaultAsync(message => message.Id == id));
        }

        [HttpPost]
        public String Post(string value)
        {
            return value;
        }
    }
}