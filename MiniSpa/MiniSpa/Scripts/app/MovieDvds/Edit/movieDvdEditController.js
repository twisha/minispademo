(function (app) {
    var controller = function ($scope, $routeParams, movieDvdService, movieDvdsLookupService, movieDvdsNavigationService) {
        movieDvdService.getDvd($routeParams.id).then(function (dvd) {
            $scope.dvd = dvd;
        });
        movieDvdsLookupService.getGenres().then(function (genres) {
            $scope.genres = genres;
        });
        $scope.saveDvd = function () {
            movieDvdService.saveDvd($routeParams.id, $scope.dvd).then(function () {
                $scope.saveSuccess = true;
            }, function () {
                $scope.saveSuccess = false;
            });
        };
        $scope.navigateToList = function () {
            movieDvdsNavigationService.navigateToList();
        };
    };
    controller.$inject = ['$scope', '$routeParams', 'movieDvdService', 'movieDvdsLookupService', 'movieDvdsNavigationService'];
    app.controller("movieDvdEditController", controller);
})(angular.module("movieDvdsApp"));