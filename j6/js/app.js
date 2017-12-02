
var app = angular.module("myApp",["ui.router"]);
    app.controller('login', function($scope,$http,$state) {
        $scope.login = function() {
           $http({
               method:"POST",
               url: '/carrots-admin-ajax/a/login',
               // data:$.param({name:$scope.name,pwd:$scope.password}),
               params:{
                   name:$scope.name,
                   pwd:$scope.password
               },
               // headers:{"Content-Type":"application/x-www-form-urlencoded"}  //data方法header要加 s .
               header:{"Content-Type":"application/x-www-form-urlencoded"}      //params方法header不用加 s .
           }).then(function (response) {
               if(response.data.code ===0){
                   $scope.messages = "success";
                   $state.go('home.hello',{},{reload:true})
               }else if($scope.name !== "admin") {
                   $scope.messages = "无效账号";
               }else if($scope.password !== "123456"){
                   $scope.messages = "密码错误";
               }
           }).catch(function(response) {
           })
        };
});

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
app.controller("page1",function ($scope) {
    $scope.types = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
    $scope.states = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
});
app.controller("page2",function ($scope) {
    $scope.pageTypes = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
});


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