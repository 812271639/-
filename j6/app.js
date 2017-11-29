$(document).ready(function () {


    $("#leftTOP").click(function () {
        $("#firstDown").toggleClass("glyphicon-chevron-down");
        $("#firstUl").toggle();
        $("#secondUl").hide();
    });
    $("#leftBottom").click(function () {
        $("#secondDown").toggleClass("glyphicon-chevron-down");
        $("#secondUl").toggle();
        $("#firstUl").hide();
    });
    $("#topButton").click(function () {
        $(".mainLeft").toggle();
    });


});


var app = angular.module("myApp",["ui.router"]);
app.controller("myCtrl",function ($scope) {
   $scope.types = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
    $scope.states = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
    $scope.pageTypes = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
});
app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","/first");
    $stateProvider
        // .state("index",{
        //     url:"/index",
        //     templateUrl:""
        // })
        .state("index.first",{
            url:"/first",
            templateUrl:"first.html"
        })
        .state("index.page1",{
            url:"/page1",
            templateUrl:"page1.html"
        })
        .state("index.page2",{
            url:"/page2",
            templateUrl:"page2.html"
        })
});