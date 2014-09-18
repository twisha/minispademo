/// <reference path="../../../minispa/scripts/angular.js" />
/// <reference path="../../../minispa/scripts/angular-route.js" />
/// <reference path="../../../minispa/bower_components/ng-table/ng-table.js" />
/// <reference path="../../../minispa/scripts/angular-mocks.js" />
/// <reference path="../../../minispa/scripts/app/musicalbums/shared/musicalbumsmodule.js" />
/// <reference path="../../../minispa/scripts/app/musicalbums/shared/musicalbumsrouteconfig.js" />
describe("Shared: Routes config for module musicAlbumsApp", function () {
    var routeProvider, appRootUrl;
    beforeEach(function () {
        module("musicAlbumsApp");
        appRootUrl = "app";
        window.miniSpaApp = { rootUrl: appRootUrl };
        inject(function ($route) {
            routeProvider = $route;
        });
    });
    it("verify mapping for default list route to view and controller", function () {
        var route = routeProvider.routes['/'];
        expect(route.controller).toBe('musicAlbumListController');
        expect(route.templateUrl).toEqual(miniSpaApp.rootUrl + "MusicAlbums/List");
    });
    it("verify mapping for other not mapped routes to view and controller", function () {
        var route = routeProvider.routes[null];
        expect(route.redirectTo).toEqual('/');
    });
    it("verify mapping for view route to view and controller", function () {
        var route = routeProvider.routes['/Detail/:id'];
        expect(route.controller).toBe('musicAlbumDetailController');
        expect(route.templateUrl).toEqual(miniSpaApp.rootUrl + "MusicAlbums/Detail");
    });
    it("verify mapping for edit route to view and controller", function () {
        var route = routeProvider.routes['/Edit/:id'];
        expect(route.controller).toBe('musicAlbumEditController');
        expect(route.templateUrl).toEqual(miniSpaApp.rootUrl + "MusicAlbums/Edit");
    });
});