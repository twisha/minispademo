(function (app) {
    var controller = function ($scope, $routeParams, movieDvdService, movieDvdsNavigationService) {
        movieDvdsNavigationService.scrollTop();
        movieDvdService.getDvd($routeParams.id).then(function (dvd) {
            $scope.dvd = dvd;
        });
        $scope.navigateToList = function () {
            movieDvdsNavigationService.navigateToList();
        };
    };
    controller.$inject = ['$scope', '$routeParams', 'movieDvdService', 'movieDvdsNavigationService'];
    app.controller("movieDvdDetailController", controller);
})(angular.module("movieDvdsApp"));