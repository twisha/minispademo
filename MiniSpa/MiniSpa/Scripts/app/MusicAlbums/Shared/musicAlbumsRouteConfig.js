(function (app) {
    var routeConfig = function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "musicAlbumListController",
            templateUrl: window.miniSpaApp.rootUrl + "MusicAlbums/List",
            reloadOnSearch: false
        }).when("/:genreId", {
            controller: "musicAlbumListController",
            templateUrl: window.miniSpaApp.rootUrl + "MusicAlbums/List",
            reloadOnSearch: false
        }).when("/Detail/:id", {
            controller: "musicAlbumDetailController",
            templateUrl: window.miniSpaApp.rootUrl + "MusicAlbums/Detail",
            reloadOnSearch: false
        }).when("/Edit/:id", {
            controller: "musicAlbumEditController",
            templateUrl: window.miniSpaApp.rootUrl + "MusicAlbums/Edit",
            reloadOnSearch: false
        }).otherwise({ redirectTo: "/" });
    };
    routeConfig.$inject = ['$routeProvider'];
    app.config(routeConfig);
})(angular.module("musicAlbumsApp"));