(function (app) {
    var service = function ($http, $q) {
        var getDvd = function (id) {
            var url = window.miniSpaApp.rootUrl + "api/MovieDvd/" + id;
            var deferred = $q.defer();
            $http.get(url).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        };
        var saveDvd = function (id, dvd) {
            var url = window.miniSpaApp.rootUrl + "api/MovieDvd/" + id;
            var deferred = $q.defer();
            $http.put(url, dvd).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        };
        return {
            getDvd: getDvd,
            saveDvd: saveDvd
        };
    };
    service.$inject = ['$http', '$q'];
    app.factory("movieDvdService", service);
})(angular.module("movieDvdsApp"));