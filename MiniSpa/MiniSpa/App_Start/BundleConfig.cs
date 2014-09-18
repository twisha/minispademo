using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace MiniSpa.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bootstrap
            bundles.Add(new StyleBundle("~/Content/bootstrap").Include("~/Content/bootstrap.css"));
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/jquery-{version}.js"));

            //AngularJs
            bundles.Add(
                new ScriptBundle("~/bundles/angular").Include("~/Scripts/angular.js")
                    .Include("~/Scripts/angular-route.js"));

            //ngTable
            bundles.Add(
                new StyleBundle("~/Content/ngtable").Include("~/bower_components/ng-table/ng-table.css"));
            bundles.Add(
                new ScriptBundle("~/bundles/ngtable").Include("~/bower_components/ng-table/ng-table.js"));

            //app
            bundles.Add(new StyleBundle("~/Content/app").Include("~/Content/app.css"));
            bundles.Add(new ScriptBundle("~/bundles/app").Include("~/Scripts/app.js"));

            //AngularJs Scripts - Music Albums Module
            bundles.Add(
                new ScriptBundle("~/bundles/angularMusicAlbums").Include(
                    "~/Scripts/app/MusicAlbums/Shared/musicAlbumsModule.js")
                    .Include(
                        "~/Scripts/app/MusicAlbums/Shared/musicAlbumsRouteConfig.js")
                    .Include(
                        "~/Scripts/app/MusicAlbums/Shared/musicAlbumsLookupService.js")
                    .Include(
                        "~/Scripts/app/MusicAlbums/Shared/musicAlbumsNavigationService.js")
                    .Include(
                        "~/Scripts/app/MusicAlbums/List/musicAlbumListService.js")
                    .Include(
                        "~/Scripts/app/MusicAlbums/List/musicAlbumListController.js")
                    .Include(
                        "~/Scripts/app/MusicAlbums/Shared/musicAlbumService.js")
                    .Include(
                        "~/Scripts/app/MusicAlbums/Detail/musicAlbumDetailController.js")
                    .Include(
                        "~/Scripts/app/MusicAlbums/Edit/musicAlbumEditController.js"));

            //AngularJs Scripts - Movie Dvds Module
            bundles.Add(
                new ScriptBundle("~/bundles/angularMovieDvds").Include(
                    "~/Scripts/app/MovieDvds/Shared/movieDvdsModule.js")
                    .Include(
                        "~/Scripts/app/MovieDvds/Shared/movieDvdsRouteConfig.js")
                    .Include(
                        "~/Scripts/app/MovieDvds/Shared/movieDvdsLookupService.js")
                    .Include(
                        "~/Scripts/app/MovieDvds/Shared/movieDvdsNavigationService.js")
                    .Include(
                        "~/Scripts/app/MovieDvds/List/movieDvdListService.js")
                    .Include(
                        "~/Scripts/app/MovieDvds/List/movieDvdListController.js")
                    .Include(
                        "~/Scripts/app/MovieDvds/Shared/movieDvdService.js")
                    .Include(
                        "~/Scripts/app/MovieDvds/Detail/movieDvdDetailController.js")
                    .Include(
                        "~/Scripts/app/MovieDvds/Edit/movieDvdEditController.js"));
        }
    }
}