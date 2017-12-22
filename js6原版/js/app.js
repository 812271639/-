
 angular.module("myApp", ["ui.router","oc.lazyLoad"])
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/login");
    $stateProvider
        .state("login", {              //state后面的参数login，用以区分这部分路由对哪一个命令进行响应。
            url: "/login",
            controller:"login",
            templateUrl: "view/login.html",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["js/login.js","css/login.css"]);
                }]
            }
        })
        .state("home", {
            url: "/",
            templateUrl: "view/home.html",
            controller: "home",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/home.js")
                }]
            }
        })
        .state("home.welcome", {
            url: "welcome",
            templateUrl: "view/welcome.html"
        })
        .state("home.hello", {
            url: "hello",
            templateUrl: "view/hello.html"
        })
        .state("home.hello1", {
            url: "hello1",
            templateUrl: "view/hello1.html"
        })
        .state("home.page1", {
            url: '1?page&size&startAt&endAt&type&status',
            templateUrl: "view/page1.html",
            controller: "page1",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["js/page1.js","css/page1.css"])
                }]
            }
        })
        .state("home.page2", {
            url: "2?id",
            templateUrl: "view/page2.html",
            controller: "page2",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["js/page2.js","css/page2.css"])
                }]
            }
        })
});






// var app =  angular.module("myApp", ["ui.router", "ui.bootstrap","angularFileUpload","meta.umeditor"]);
//
// app.config(function ($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.when("", "/login");
//     $stateProvider
//         .state("login", {              //state后面的参数login，用以区分这部分路由对哪一个命令进行响应。
//             url: "/login",
//             templateUrl: "login.html",
//             controller: "login"
//         })
//         .state("home", {
//             url: "/",
//             templateUrl: "home.html",
//             controller: "home"
//         })
//         .state("home.welcome", {
//             url: "welcome",
//             templateUrl: "welcome.html"
//         })
//         .state("home.hello", {
//             url: "hello",
//             templateUrl: "hello.html"
//         })
//         .state("home.hello1", {
//             url: "hello1",
//             templateUrl: "hello1.html"
//         })
//         .state("home.page1", {
//             url: '1?page&size&startAt&endAt&type&status',
//             templateUrl: "page1.html",
//             controller: "page1"
//         })
//         .state("home.page2", {
//             url: "2?id",
//             templateUrl: "page2.html",
//             controller: "page2"
//         })
// });
//
