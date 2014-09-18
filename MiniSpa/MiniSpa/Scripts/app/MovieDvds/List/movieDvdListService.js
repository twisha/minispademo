(function (app) {
    var service = function ($http, $q) {
        var getDvds = function (genreId) {
            var url = window.miniSpaApp.rootUrl + "api/MovieDvd";
            if (typeof genreId !== "undefined") {
                url += "?genreId=" + genreId;
            }
            var deferred = $q.defer();
            $http.get(url).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        };
        return {
            getDvds: getDvds
        };
    };
    service.$inject = ['$http', '$q'];
    app.factory("movieDvdListService", service);
})(angular.module("movieDvdsApp"));