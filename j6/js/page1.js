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
    //
    // = $filter('date')($stateParams.startAt, 'yyyy-MM-dd ');//保存状态
    //   $filter('date')(, 'yyyy-MM-dd ')  ;
    $scope.start = Date.parse($stateParams.startAt);
    $scope.end = Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99);
    $scope.start = ($scope.start) ? $scope.start : "";
    $scope.end = ( $scope.end ) ? $scope.end : "";

    $scope.typed = ($stateParams.type ) ? $stateParams.type : "";
    //通过获取数组对象下标方法保存状态

    $scope.stateNum = ($stateParams.status) ? $stateParams.status : "";
    $scope.page = ($stateParams.page ) ? $stateParams.page : 1;    //添加默认值
    $scope.size = ($stateParams.size) ? $stateParams.size : 10;
    $scope.startTime = $stateParams.startAt;                        //保存状态
    $scope.endTime = $stateParams.endAt;
    $http({                //请求加载页面获取数据
        method: "GET",
        url: '/carrots-admin-ajax/a/article/search',
        params: {
            page: $stateParams.page,
            size: $stateParams.size,
            // startAt: Date.parse($stateParams.startAt),   //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
            // endAt:   Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99),
            startAt: $scope.start,   //传递参数到路由页面，保存在url里
            endAt: $scope.end,
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
            }, {reload: true});
    };
    $scope.search = function () {  //搜索点击事件
        $state.go('home.page1',
            {
                // startAt: Date.parse($scope.startTime),   //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
                // endAt:   Date.parse($scope.endTime) + ( 16 * 60 * 60 * 999.99),
                startAt: $scope.startTime,
                endAt: $scope.endTime,
                type: $scope.typed,
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
    }

});
