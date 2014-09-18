using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MiniSpa.Models
{
    public class MovieDvd
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public decimal Price { get; set; }

        public KeyValuePair<int, string> Genre { get; set; }
    }
}