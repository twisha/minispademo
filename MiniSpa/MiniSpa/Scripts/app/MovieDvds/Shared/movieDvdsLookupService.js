(function (app) {
    var service = function ($http, $q) {
        var getGenres = function () {
            var deferred = $q.defer();
            $http.get(window.miniSpaApp.rootUrl + "api/MovieGenre", { cache: true }).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        };
        return {
            getGenres: getGenres
        };
    };
    service.$inject = ['$http', '$q'];
    app.factory("movieDvdsLookupService", service);
})(angular.module("movieDvdsApp"));