

//
// var app=angular.module("myApp",["ui.router"]);

    app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.when("","/login");
    $stateProvider
        .state("login",{              //state后面的参数login，用以区分这部分路由对哪一个命令进行响应。
            url:"/login",
            templateUrl:"login.html"
        })
        .state("home",{
            url:"/home",
            templateUrl:"home.html"
        })
        .state("home.hello",{
            url:"/hello",
            templateUrl:"hello.html"
        })
        .state("home.page1",{
            url:"/page1",
            templateUrl:"page1.html"
        })
        .state("home.page2",{
            url:"/page2",
            templateUrl:"page2.html"
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
//             templateUrl:"home.html"
//         })
//         .state("home.hello",{
//             url:"/hello",
//             templateUrl:"hello.html"
//         })
//         .state("home.page1",{
//             url:"/page1",
//             templateUrl:"page1.html"
//         })
//         .state("home.page2",{
//             url:"/page2",
//             templateUrl:"page2.html"
//         })
// }]);