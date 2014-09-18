using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MiniSpa.App_Data;
using MovieDvd = MiniSpa.Models.MovieDvd;

namespace MiniSpa.Api
{
    public class MovieDvdController : ApiController
    {
        // GET api/moviedvd
        public IEnumerable<MovieDvd> Get(int? genreId)
        {
            using (var ctx = new StoreEntities())
            {
                var movieDvdsRaw = (from movieDvd in ctx.MovieDvds
                                    join genre in ctx.MovieGenres on movieDvd.MovieGenreId equals genre.MovieGenreId
                                    where movieDvd.MovieGenreId == (genreId != null && genreId > 0 ? genreId : movieDvd.MovieGenreId)
                                    orderby movieDvd.Title
                                    select new { movieDvd, genre }).ToList();
                var movieDvds = movieDvdsRaw.Select(q => new MovieDvd
                {
                    Id = q.movieDvd.MovieDvdId,
                    Title = q.movieDvd.Title,
                    Price = q.movieDvd.Price,
                    Genre = new KeyValuePair<int, string>(q.genre.MovieGenreId, q.genre.Name)
                });
                return movieDvds;
            }
        }

        // GET api/moviedvd/5
        public MovieDvd Get(int id)
        {
            MovieDvd movieDvd = null;
            using (var ctx = new StoreEntities())
            {
                var dvdRaw = (from dvd in ctx.MovieDvds
                              where dvd.MovieDvdId == id
                              join genre in ctx.MovieGenres on dvd.MovieGenreId equals genre.MovieGenreId
                              select new { dvd, genre }).SingleOrDefault();
                if (dvdRaw != null)
                {
                    movieDvd = new MovieDvd
                    {
                        Id = dvdRaw.dvd.MovieDvdId,
                        Title = dvdRaw.dvd.Title,
                        Price = dvdRaw.dvd.Price,
                        Genre = new KeyValuePair<int, string>(dvdRaw.genre.MovieGenreId, dvdRaw.genre.Name)
                    };
                }
            }
            return movieDvd;
        }

        // PUT api/moviedvd/5
        public void Put(int id, MovieDvd movieDvd)
        {
            using (var ctx = new StoreEntities())
            {
                var movieDvdRaw = ctx.MovieDvds.Single(q => q.MovieDvdId == id);
                movieDvdRaw.Title = movieDvd.Title;
                movieDvdRaw.Price = movieDvd.Price;
                movieDvdRaw.MovieGenreId = movieDvd.Genre.Key;
                ctx.SaveChanges();
            }
        }
    }
}
