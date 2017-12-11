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

    $scope.types = types;  //获取常量表types数据 ，应该是绑定作用域吧
    $scope.state = state;
    $scope.typed = $scope.types[0];  //初始化下拉列表
    $scope.stated = $scope.state[0];  //初始化下拉列表

    $scope.startTime = $filter('date')($stateParams.startAt, 'yyyy-MM-dd HH:mm:ss');
    $scope.endTime = $filter('date')($stateParams.endAt, 'yyyy-MM-dd HH:mm:ss');
    // $scope.typed = $stateParams.type;
    // $scope.stated = $stateParams.status;
    $scope.page = ($stateParams.page != undefined ) ? $stateParams.page : 1;//添加默认值
    $scope.size = ($stateParams.size != undefined) ? $stateParams.size : 10;

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
                endAt: Date.parse($scope.endTime) + ( 16 * 60 * 60 * 999.99),
                type: $scope.typed.typeNum,
                status: $scope.stated.stateNum
            });
    }
});
