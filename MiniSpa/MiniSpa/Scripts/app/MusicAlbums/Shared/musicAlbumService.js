(function (app) {
    var service = function($http, $q) {
        var getAlbum = function(id) {
            var url = window.miniSpaApp.rootUrl + "api/MusicAlbum/" + id;
            var deferred = $q.defer();
            $http.get(url).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject();
            });
            return deferred.promise;
        };
        var saveAlbum = function(id, album) {
            var url = window.miniSpaApp.rootUrl + "api/MusicAlbum/" + id;
            var deferred = $q.defer();
            $http.put(url, album).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject();
            });
            return deferred.promise;
        };
        var addAlbum = function(album) {
            var url = window.miniSpaApp.rootUrl + "api/MusicAlbum";
            var deferred = $q.defer();
            $http.post(url, album).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject();
            });
            return deferred.promise;
        };
        return {
            getAlbum: getAlbum,
            saveAlbum: saveAlbum,
            addAlbum: addAlbum
        };
    };
    service.$inject = ['$http', '$q'];
    app.factory("musicAlbumService", service);
})(angular.module("musicAlbumsApp"));