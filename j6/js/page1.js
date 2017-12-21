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
    //---------------------------------------------------------分页---------------------------------------------------
    $scope.maxSize = 3;            //显示的数字
    $scope.items = 10;             //每页多少条
    $scope.bigTotalItems = 100000; //分页总数/给一个初始值，在http请求时再赋值覆盖掉，需要大于数据总数。
    $scope.bigCurrentPage = 1;     //当前页
    $scope.pageChanged = function () {
        $state.go('home.page1', {
            page: $scope.bigCurrentPage,  //传递参数到路由页面，保存在url里
            size: $scope.size
        }, {reload: true});
    };
    //
    $scope.sure = function () {         //页面跳转点击事件
        $state.go('home.page1', {
            page: $scope.toPage,        //传递参数到路由页面，保存在url里
            size: $scope.size
        }, {reload: true});
    };
//-------------------------------------------------------------------------------------------------------
    $scope.disc = 0;//id排序
    $scope.params = $state.params;
    $scope.types = types;                 //获取常量表types数据 ，应该是绑定作用域吧
    $scope.state = state;
    $scope.status = status;
    //  $scope.start= $filter('date')($stateParams.startAt, 'yyyy-MM-dd ');//保存状态
    //  $scope.end =  $filter('date')(, 'yyyy-MM-dd ')  ;
    $scope.start = Date.parse($stateParams.startAt);
    $scope.end = Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99);
    $scope.start = ($scope.start) ? $scope.start : "";             //添加默认值
    $scope.end = ( $scope.end ) ? $scope.end : "";
    $scope.bigCurrentPage = ($stateParams.page ) ? $stateParams.page : 1;     //添加默认值'
    $scope.size = ($stateParams.size) ? $stateParams.size : 10;
    $scope.items = ($stateParams.size) ? $stateParams.size : 10;
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
        $scope.total = response.data.data.total;          // 返回的数据
        $scope.bigTotalItems = $scope.total; //总数
    });
//--------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------上下线---------------------------------------------
    $scope.statuses = function (x, y) {
        var z = (y == 1) ? 2 : 1;
        var q;
        var p;
        if (z == 1) {
            q = "确定要下线吗";
            p = "下线成功"
        } else if (z == 2) {
            q = "确定要上线吗";
            p = "上线成功"
        }
        if (confirm(q)) {
            $http({
                method: "PUT",
                url: '/carrots-admin-ajax/a/u/article/status',
                params: {
                    id: x,
                    status: z
                }
            }).then(function () {
                alert(p);
                $state.go('home.page1', {}, {reload: true});
            })
        }
    };
//-------------------------------------------编辑-保存数据到page2-url-------------------------------------
    $scope.compile = function (id) {
        $state.go('home.page2', {id: id}, {reload: true});
    };
//---------------------------------------------------------删除--------------------------------------------
    $scope.delete = function (id) {
        if (confirm("确定删除吗？")) {
            $http({
                method: "DELETE",
                url: " /carrots-admin-ajax/a/u/article/" + id
            }).then(function (response) {
                $state.go('home.page1', {}, {reload: true});
                alert("删除成功" + response.data.code + response.data.message);
            })
        }
    };
});