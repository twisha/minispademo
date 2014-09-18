using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MiniSpa.App_Data;
using MiniSpa.Models;

namespace MiniSpa.Api
{
    public class MusicAlbumController : ApiController
    {
        // GET api/musicalbum
        public IEnumerable<MusicAlbum> Get(int? genreId)
        {
            //TODO: Repository Pattern implementation is pending
            using (var ctx = new StoreEntities())
            {
                var albumsRaw = (from album in ctx.Albums
                                 join artist in ctx.Artists on album.ArtistId equals artist.ArtistId
                                 join genre in ctx.Genres on album.GenreId equals genre.GenreId
                                 where album.GenreId == (genreId != null && genreId > 0 ? genreId : album.GenreId)
                                 orderby album.Title
                                 select new { album, artist, genre }).ToList();
                var albums = albumsRaw.Select(q => new MusicAlbum
                {
                    Id = q.album.AlbumId,
                    Title = q.album.Title,
                    Price = q.album.Price,
                    Artist = new KeyValuePair<int, string>(q.artist.ArtistId, q.artist.Name),
                    Genre = new KeyValuePair<int, string>(q.genre.GenreId, q.genre.Name)
                });
                return albums;
            }
        }

        // GET api/musicalbum/5
        public MusicAlbum Get(int id)
        {
            MusicAlbum musicAlbum = null;
            using (var ctx = new StoreEntities())
            {
                var albumRaw = (from album in ctx.Albums
                                where album.AlbumId == id
                                join artist in ctx.Artists on album.ArtistId equals artist.ArtistId
                                join genre in ctx.Genres on album.GenreId equals genre.GenreId
                                select new { album, artist, genre }).SingleOrDefault();
                if (albumRaw != null)
                {
                    musicAlbum = new MusicAlbum
                    {
                        Id = albumRaw.album.AlbumId,
                        Title = albumRaw.album.Title,
                        Price = albumRaw.album.Price,
                        Artist = new KeyValuePair<int, string>(albumRaw.artist.ArtistId, albumRaw.artist.Name),
                        Genre = new KeyValuePair<int, string>(albumRaw.genre.GenreId, albumRaw.genre.Name)
                    };
                }
            }
            return musicAlbum;
        }

        // POST api/musicalbum
        public void Post(MusicAlbum musicAlbum)
        {
            using (var ctx = new StoreEntities())
            {
                ctx.Albums.Add(new Album
                {
                    Title = musicAlbum.Title,
                    Price = musicAlbum.Price,
                    ArtistId = musicAlbum.Artist.Key,
                    GenreId = musicAlbum.Genre.Key
                });
                ctx.SaveChanges();
            }
        }

        // PUT api/musicalbum/5
        public void Put(int id, MusicAlbum musicAlbum)
        {
            using (var ctx = new StoreEntities())
            {
                var albumRaw = ctx.Albums.Single(q => q.AlbumId == id);
                albumRaw.Title = musicAlbum.Title;
                albumRaw.Price = musicAlbum.Price;
                albumRaw.ArtistId = musicAlbum.Artist.Key;
                albumRaw.GenreId = musicAlbum.Genre.Key;
                ctx.SaveChanges();
            }
        }
    }
}
