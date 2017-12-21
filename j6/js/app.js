
var app =  angular.module("myApp", ["ui.router", "ui.bootstrap","angularFileUpload","meta.umeditor"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/login");
    $stateProvider
        .state("login", {              //state后面的参数login，用以区分这部分路由对哪一个命令进行响应。
            url: "/login",
            templateUrl: "login.html",
            controller: "login"
        })
        .state("home", {
            url: "/",
            templateUrl: "home.html",
            controller: "home"
        })
        .state("home.welcome", {
            url: "welcome",
            templateUrl: "welcome.html"
        })
        .state("home.hello", {
            url: "hello",
            templateUrl: "hello.html"
        })
        .state("home.hello1", {
            url: "hello1",
            templateUrl: "hello1.html"
        })
        .state("home.page1", {
            url: '1?page&size&startAt&endAt&type&status',
            templateUrl: "page1.html",
            controller: "page1"
        })
        .state("home.page2", {
            url: "2?id",
            templateUrl: "page2.html",
            controller: "page2"
        })
});

// app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
//     $urlRouterProvider.when("","/login");
//     $stateProvider
//         .state("login",{              //state后面的参数login，用以区分这部分路由对哪一个命令进行响应。
//             url:"/login",
//             templateUrl:"login.html"
//         })
//         .state("home",{
//             url:"/home",
//             templateUrl:"pageB.html"
//         })
//         .state("home.hello",{
//             url:"/hello",
//             templateUrl:"hello.html"
//         })
//         .state("home.page1",{
//             url:"/page1",
//             templateUrl:"pageA.html"
//         })
//         .state("home.page2",{
//             url:"/page2",
//             templateUrl:"page2.html"
//         })
// }]);