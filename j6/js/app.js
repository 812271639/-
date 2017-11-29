
// app.controller("login",function ($sccope) {
    $(document).ready(function () {
        $("body").keydown(function () {
            if (event.keyCode==13) {
                $(".log").click();
            }
        });
        $("#account, #password").mousedown(function () {
            $(".verification").text("");
        });
        $("#account").mouseleave(function () {
            var account =  $("#account").val();
            var b = account.length;

            if(b<1 || b >11 ){
                $(".verification").text("无效的账号");
            }
        });
        $(".log").click(function () {
            var account =  $("#account").val();
            var password = $("#password").val();
            var d = {
                name: account,
                pwd: password
            };
            $.ajax({
                type: 'post',
                url: '/carrots-admin-ajax/a/login',
                // contentType: 'application/json;charset=utf-8', //加上这行请求不到数据
                contentType:"application/x-www-form-urlencoded",  //加上这行有数据
                // dataType: 'json',//加上这行出问题，状态为success，但是没数据
                // data: "name="+account+"&pwd="+password,    //方式一
                // data:{"name":account,"pwd":password},      //方式二
                data:d,                                    //方式三
                success: function (data,status) {
                    alert("数据: \n" + data + "\n状态: " + status);
                }
            });
            var b = account.length;
            var c = password.length;

            if(b < 1 || b >11 ){
                $(".verification").text("无效的账号");
            }
            else if( c <1 ){
                $(".verification").text("无效的密码");
            }
        });
    });

// });

///////////////////////////////////////////
var app = angular.module("myApp",["ui.router"]);
app.controller("index",function ($scope) {

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
        .state("login",{
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