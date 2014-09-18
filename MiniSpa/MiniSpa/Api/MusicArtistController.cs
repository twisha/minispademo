using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MiniSpa.App_Data;

namespace MiniSpa.Api
{
    public class MusicArtistController : ApiController
    {
        // GET api/musicartist
        public IEnumerable<KeyValuePair<int, string>> Get()
        {
            using (var ctx = new StoreEntities())
            {
                var artistsRaw = ctx.Artists.Select(q => new { q.Name, q.ArtistId }).ToList();
                var artists = artistsRaw.Select(q => new KeyValuePair<int, string>(q.ArtistId, q.Name));
                return artists;
            }
        }
    }
}
