app.controller("page1", function ($scope, $http, $stateParams, $state) {
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
    $scope.types = {
        "首页banner": 0,
        "找职位banner": 1,
        "找精英banner": 2,
        "行业大图": 3
    };
    $scope.state = {
        "上线": 2,
        "草稿": 1
    };
    console.log($stateParams.page);
    console.log($stateParams.size);
    console.log($stateParams.startAt);
    console.log($stateParams.endAt);
    console.log($stateParams.type);
    console.log($stateParams.status);
    //
    // $scope.size = 10;               //默认的初始值，显示在页面上，并且双向绑定页面输入
    // $scope.page = 1;

    $scope.startTime = $stateParams.startAt;
    $scope.endTime = $stateParams.endAt;

    $scope.typed = $stateParams.type;
    $scope.stated = $stateParams.status;

    $scope.page = $stateParams.page;
    $scope.size = $stateParams.size;
    $http({                                     //默认请求，初次加载页面获取数据
        method: "GET",
        url: '/carrots-admin-ajax/a/article/search',
        params: {
            page: $stateParams.page,
            size: $stateParams.size,
            startAt: $stateParams.startAt,   //传递参数到路由页面，保存在url里
            endAt: $stateParams.endAt,
            type: $stateParams.type,
            status: $stateParams.status
        }
    }).then(function (response) {
        $scope.articleList = response.data.data.articleList;
    });
    $scope.sure = function () {       //分页点击事件
        $state.go('home.page1',
            {
                page: $scope.page,   //传递参数到路由页面，保存在url里
                size: $scope.size
            });
    };
    $scope.search = function () {  //搜索点击事件
        $state.go('home.page1',
            {
                startAt: $scope.startTime,   //传递参数到路由页面，保存在url里
                endAt: $scope.endTime,
                type: $scope.typed,
                status: $scope.stated
            });
    }
});
// app.filter("myFilter",function () {
//     return function (text) {
//         return text.replace("2","找精英banner")
//     }
// });