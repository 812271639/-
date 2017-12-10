app.controller("page1", function ($scope, $http, $stateParams, $state,$filter) {
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
    $scope.startTime =   $filter('date')($stateParams.startAt, 'yyyy-MM-dd HH:mm:ss');
    $scope.endTime = $filter('date')( $stateParams.endAt, 'yyyy-MM-dd HH:mm:ss');
    $scope.typed = $stateParams.type;
    $scope.stated = $stateParams.status;
    $scope.page = ($stateParams.page != undefined ) ? $stateParams.page : 1 ;//添加默认值
    $scope.size = ($stateParams.size != undefined) ? $stateParams.size : 10 ;

    $http({                                     //请求加载页面获取数据
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
                startAt: Date.parse($scope.startTime),   //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
                endAt:  Date.parse($scope.endTime)+( 16*60 * 60 * 999.99),
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