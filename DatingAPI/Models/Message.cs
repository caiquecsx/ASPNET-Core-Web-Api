using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingAPI.Models
{
    public class Message
    {
        public Message(String name)
        {
            this.Name = name;
        }
        public int Id { get; set; }
        public String Name { get; set; }
    }
}
