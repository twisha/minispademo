(function (app) {
    var controller = function ($scope, $routeParams, musicAlbumService, musicAlbumsNavigationService) {
        musicAlbumsNavigationService.scrollTop();
        musicAlbumService.getAlbum($routeParams.id).then(function (album) {
            $scope.album = album;
        });
        $scope.navigateToList = function () {
            musicAlbumsNavigationService.navigateToList();
        };
    };
    controller.$inject = ['$scope', '$routeParams', 'musicAlbumService', 'musicAlbumsNavigationService'];
    app.controller("musicAlbumDetailController", controller);
})(angular.module("musicAlbumsApp"));