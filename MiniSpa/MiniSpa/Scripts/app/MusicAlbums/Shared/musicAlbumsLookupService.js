(function (app) {
    var service = function ($http, $q) {
        var getGenres = function () {
            var deferred = $q.defer();
            $http.get(window.miniSpaApp.rootUrl + "api/MusicGenre", { cache: true }).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        };
        var getArtists = function () {
            var deferred = $q.defer();
            $http.get(window.miniSpaApp.rootUrl + "api/MusicArtist", { cache: true }).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        };
        return {
            getArtists: getArtists,
            getGenres: getGenres
        };
    };
    service.$inject = ['$http', '$q'];
    app.factory("musicAlbumsLookupService", service);
})(angular.module("musicAlbumsApp"));