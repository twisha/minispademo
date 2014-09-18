(function (app) {
    var routeConfig = function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "movieDvdListController",
            templateUrl: window.miniSpaApp.rootUrl + "MovieDvds/List",
            reloadOnSearch: false
        }).when("/:genreId", {
            controller: "movieDvdListController",
            templateUrl: window.miniSpaApp.rootUrl + "MovieDvds/List",
            reloadOnSearch: false
        }).when("/Detail/:id", {
            controller: "movieDvdDetailController",
            templateUrl: window.miniSpaApp.rootUrl + "MovieDvds/Detail",
            reloadOnSearch: false
        }).when("/Edit/:id", {
            controller: "movieDvdEditController",
            templateUrl: window.miniSpaApp.rootUrl + "MovieDvds/Edit",
            reloadOnSearch: false
        }).otherwise({ redirectTo: "/" });
    };
    routeConfig.$inject = ['$routeProvider'];
    app.config(routeConfig);
})(angular.module("movieDvdsApp"));