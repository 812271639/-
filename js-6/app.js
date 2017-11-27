


var myApp = angular.module("myApp",['ui.router']);
myApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","/page");

    $stateProvider
        .state("page",{
        url:"/page",
            templateUrl:"page.html"
        })
        .state("page.a",{
            url:"/a",
            templateUrl:"a.html"
        })
        .state("page.b",{
            url:"/b",
            templateUrl:"b.html"
        })
        .state("page.c",{
            url:"/c",
            templateUrl:"c.html"
        });

});