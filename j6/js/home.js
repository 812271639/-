
// var app = angular.module("myApp",["ui.router"]);
app.controller("home",function ($scope) {
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

});



