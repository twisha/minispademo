(function (app) {
    var service = function ($location) {
        var listUrl = '/',
            setListUrl = function(genreId) {
                $location.search('genreId', genreId);
                listUrl = $location.url();
            },
            navigateToList = function() {
                $location.url(listUrl);
            },
            scrollTop = function() {
                $location.hash('top');
            };
        return {
            setListUrl: setListUrl,
            navigateToList: navigateToList,
            scrollTop: scrollTop
        };
    };
    service.$inject = ['$location'];
    app.factory("movieDvdsNavigationService", service);
})(angular.module("movieDvdsApp"));