using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MiniSpa.App_Data;

namespace MiniSpa.Api
{
    public class MusicGenreController : ApiController
    {
        // GET api/musicgenre
        public IEnumerable<KeyValuePair<int, string>> Get()
        {
            using (var ctx = new StoreEntities())
            {
                var genresRaw = ctx.Genres.Select(q => new { q.Name, q.GenreId }).ToList();
                var genres = genresRaw.Select(q => new KeyValuePair<int, string>(q.GenreId, q.Name));
                return genres;
            }
        }
    }
}
