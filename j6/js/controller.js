// var app = angular.module("myApp",["ui.router"]);
app.controller("home", function ($scope, $http, $state) {
    // $(document).ready(function () {
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
    // });
    $scope.logout = function () {

        $http({
            method: "POST",
            url: "/carrots-admin-ajax/a/logout"
        }).then(function (response) {
            $state.go('login', {}, {reload: true});
            alert(response.data.code + response.data.message);
        })
    }
});

//--------------------------------------------------------登录控制器--------------------------------------------------
app.controller('login', function ($scope, $http, $state) {
    $scope.login = function () {
        $http({
            method: "POST",
            url: '/carrots-admin-ajax/a/login',
            // data:$.param({name:$scope.name,pwd:$scope.password}),
            params: {
                name: $scope.name,
                pwd: $scope.password
            },
            // headers:{"Content-Type":"application/x-www-form-urlencoded"}  //data方法header要加 s .
            header: {"Content-Type": "application/x-www-form-urlencoded"}      //params方法header不用加 s .
        }).then(function (response) {
            if (response.data.code === 0) {
                $scope.messages = "success";
                $state.go('home.hello', {}, {reload: true})
            }
            // else if($scope.name !== "admin") {
            //     $scope.messages = "无效账号";
            // }else if($scope.password !== "123456"){
            //     $scope.messages = "密码错误";
            // }
        })
    };
});
//-----------------------------------------------page1控制器-----------------------------------------------
app.controller("page1", function ($scope, $http, $stateParams, $state, $filter, types, state) {
    $("#a,#b").datetimepicker({    //时间插件
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $scope.params = $state.params;
    $scope.types = types;                                               //获取常量表types数据 ，应该是绑定作用域吧
    $scope.state = state;
    $scope.status = status;
    //
    //  $scope.start= $filter('date')($stateParams.startAt, 'yyyy-MM-dd ');//保存状态
    //  $scope.end =  $filter('date')(, 'yyyy-MM-dd ')  ;
    $scope.start = Date.parse($stateParams.startAt);
    $scope.end = Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99);
    $scope.start = ($scope.start) ? $scope.start : "";             //添加默认值
    $scope.end = ( $scope.end ) ? $scope.end : "";
    $scope.page = ($stateParams.page ) ? $stateParams.page : 1;     //添加默认值
    $scope.size = ($stateParams.size) ? $stateParams.size : 10;
    $scope.startTime = $stateParams.startAt;                        //保存状态
    $scope.endTime = $stateParams.endAt;
    $scope.typeNum = $stateParams.type;                             //保存状态
    $scope.stateNum = $stateParams.status;

    $http({                                                         //请求加载页面获取数据
        method: "GET",
        url: '/carrots-admin-ajax/a/article/search',
        params: {
            page: $stateParams.page,
            size: $stateParams.size,
            // startAt: Date.parse($stateParams.startAt),   //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
            // endAt:   Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99),
            startAt: $scope.start,                                    //传递参数到路由页面，保存在url里
            endAt: $scope.end,
            type: $stateParams.type,
            status: $stateParams.status
        }
    }).then(function (response) {
        $scope.articleList = response.data.data.articleList;          // 返回的数据

    });

    $scope.sure = function () {                                       //分页点击事件
        $state.go('home.page1',
            {
                page: $scope.page,                                     //传递参数到路由页面，保存在url里
                size: $scope.size
            }, {reload: true});
    };
    $scope.search = function () {                                      //搜索点击事件
        $state.go('home.page1',
            {
                // startAt: Date.parse($scope.startTime),  //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
                // endAt:   Date.parse($scope.endTime) + ( 16 * 60 * 60 * 999.99),
                startAt: $scope.startTime,
                endAt: $scope.endTime,
                type: $scope.typeNum,
                status: $scope.stateNum
            }, {reload: true});
    };
    $scope.clear = function () {
        $state.go('home.page1',
            {
                startAt: "",
                endAt: "",
                type: "",
                status: "",
                page: "",
                size: ""
            }, {reload: true});
    };

    $scope.statuses = function (x, y) {
       var z = (y == 1) ? 2 : 1;
        $http({
            method: "PUT",
            url: '/carrots-admin-ajax/a/u/article/status',
            params: {
                id: x,
                status: z
            }
        }).then(function (response) {
            alert(response.data.code + response.data.message);
            $state.go('home.page1', {}, {reload: true});
        })
    };
    $scope.delete = function () {
        $state.go('home.page1',
            {})
    };


});
//---------------------------------------------------page2控制器----------------------------------------
app.controller("page2", function ($scope, state) {
    $scope.state = state;
});

