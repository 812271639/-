var app = angular.module("myApp",["ui.router"]);
app.controller("myCtrl",function ($scope) {
    $scope.types = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
    $scope.states = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
    $scope.pageTypes = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
});

app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","/login");
    $stateProvider
        .state("login",{
            url:"/login",
            templateUrl:"login.html"
        })
        .state("index",{
            url:"/index",
            templateUrl:"home.html"
        })
        .state(".page1",{
            url:"/page1",
            templateUrl:"123.html"
        })
        .state(".page2",{
            url:"/page2",
            templateUrl:"page2.html"
        })
});