using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MiniSpa.App_Data;

namespace MiniSpa.Api
{
    public class MovieGenreController : ApiController
    {
        // GET api/moviegenre
        public IEnumerable<KeyValuePair<int, string>> Get()
        {
            using (var ctx = new StoreEntities())
            {
                var movieGenresRaw = ctx.MovieGenres.Select(q => new { q.MovieGenreId, q.Name }).ToList();
                var movieGenres = movieGenresRaw.Select(q => new KeyValuePair<int, string>(q.MovieGenreId, q.Name));
                return movieGenres;
            }
        }
    }
}
