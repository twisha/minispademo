(function (app) {
    var controller = function ($scope, $routeParams, $filter, ngTableParams, movieDvdListService, movieDvdsLookupService, movieDvdsNavigationService) {
        $scope.genreId = null;
        if (!angular.isUndefined($routeParams.genreId) && !isNaN($routeParams.genreId)) {
            $scope.genreId = parseInt($routeParams.genreId);
        }
        movieDvdsLookupService.getGenres().then(function (genres) {
            $scope.genres = genres;
        });
        var dvdListPromise = movieDvdListService.getDvds($scope.genreId);
        $scope.tableParams = new ngTableParams({
            page: 1, //Default Page Number
            count: 25 //Default Page Size
        }, {
            getData: function ($defer, params) {
                dvdListPromise.then(function (dvds) {
                    // use build-in angular filter
                    var filteredData = params.filter() ? $filter('filter')(dvds, params.filter()) : dvds;
                    params.total(filteredData.length); //set total count
                    var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : dvds;
                    //set data for current page
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                });
            }
        });
        $scope.search = function () {
            movieDvdsNavigationService.setListUrl($scope.genreId);
            dvdListPromise = movieDvdListService.getDvds($scope.genreId);
            $scope.tableParams.page(1);
            $scope.tableParams.count(25);
            $scope.tableParams.filter({});
            $scope.tableParams.sorting({});
            $scope.tableParams.reload();
        };
    };
    controller.$inject = ['$scope', '$routeParams', '$filter', 'ngTableParams', 'movieDvdListService', 'movieDvdsLookupService', 'movieDvdsNavigationService'];
    app.controller("movieDvdListController", controller);
})(angular.module("movieDvdsApp"));