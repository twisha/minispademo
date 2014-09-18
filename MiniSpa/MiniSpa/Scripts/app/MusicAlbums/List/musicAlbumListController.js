(function (app) {
    var controller = function ($scope, $routeParams, $filter, ngTableParams, musicAlbumListService, musicAlbumsLookupService, musicAlbumsNavigationService) {
        $scope.genreId = null;
        if (!angular.isUndefined($routeParams.genreId) && !isNaN($routeParams.genreId)) {
            $scope.genreId = parseInt($routeParams.genreId);
        }
        musicAlbumsLookupService.getGenres().then(function (genres) {
            $scope.genres = genres;
        });
        var albumListPromise = musicAlbumListService.getAlbums($scope.genreId);
        $scope.tableParams = new ngTableParams({
            page: 1, //Default Page Number
            count: 25 //Default Page Size
        }, {
            getData: function ($defer, params) {
                albumListPromise.then(function (albums) {
                    // use build-in angular filter
                    var filteredData = params.filter() ? $filter('filter')(albums, params.filter()) : albums;
                    params.total(filteredData.length); //set total count
                    var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : albums;
                    //set data for current page
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                });
            }
        });
        $scope.search = function () {
            musicAlbumsNavigationService.setListUrl($scope.genreId);
            albumListPromise = musicAlbumListService.getAlbums($scope.genreId);
            $scope.tableParams.page(1);
            $scope.tableParams.count(25);
            $scope.tableParams.filter({});
            $scope.tableParams.sorting({});
            $scope.tableParams.reload();
        };
    };
    controller.$inject = ['$scope', '$routeParams', '$filter', 'ngTableParams', 'musicAlbumListService', 'musicAlbumsLookupService', 'musicAlbumsNavigationService'];
    app.controller("musicAlbumListController", controller);
})(angular.module("musicAlbumsApp"));