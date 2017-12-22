angular.module("myApp", ["ui.router", "ui.bootstrap"])
    .controller("page1", function ($scope, $http, $stateParams, $state, $filter, type, state) {

        $("#BeginTime").datetimepicker({    //时间插件开始时间
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            weekStart: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            endDate: new Date()
        }).on('changeDate', function (e) {
            var startTime = e.date;
            $('#EndTime').datetimepicker('setStartDate', startTime);
        });
        $("#EndTime").datetimepicker({    //时间插件结束时间
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            weekStart: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            endDate: new Date()
        }).on('changeDate', function (e) {
            var endTime = e.date;
            $('#BeginTime').datetimepicker('setEndDate', endTime);
        });
        //---------------------------------------------------------分页---------------------------------------------------
        $scope.maxSize = 3;            //分页显示的数字
        $scope.bigTotalItems = 100000; //分页总数/给一个初始值，在http请求时再赋值覆盖掉，需要大于数据总数。
        $scope.pageChanged = function (page) {
            $state.go('home.page1', {
                page: page,  //传递参数到路由页面，保存在url里
                size: $scope.size
            }, {reload: true});
        };
//-------------------------------------------------------------------------------------------------------

        $scope.params = $state.params;
        console.log($scope.params);
        $scope.type = type;                                          //获取常量表types数据 ，应该是绑定作用域吧
        $scope.state = state;
        $scope.status = status;

        $scope.start = Date.parse($stateParams.startAt);
        $scope.end = Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99);
        $scope.start = ($scope.start) ? $scope.start : "";                         //添加默认值
        $scope.end = ( $scope.end ) ? $scope.end : "";
        $scope.bigCurrentPage = ($stateParams.page ) ? $stateParams.page : 1;      //添加默认值'
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
                startAt: $scope.start,                                    //传递参数到路由页面，保存在url里
                endAt: $scope.end,
                type: $stateParams.type,
                status: $stateParams.status
            }
        }).then(function (response) {
            if (response.data.code === 0) {
                $scope.articleList = response.data.data.articleList;          // 返回的数据
                $scope.total = response.data.data.total;                      // 返回的数据用于分页插件
                $scope.bigTotalItems = $scope.total;                          //分页插件的总数
            } else {
                alert(response.data.message)
            }

        });
//--------------------------------------------------------------------搜索&清空的点击事件
        $scope.clearSearch = function (startTime, endTime, typeNum, stateNum) {
            $scope.params = {
                startAt: $scope.startTime,
                endAt: $scope.endTime,
                type: $scope.typeNum,
                status: $scope.stateNum
            };
            console.log($scope.params);
            $state.go('home.page1',
                {
                    startAt: startTime,
                    endAt: endTime,
                    type: typeNum,
                    status: stateNum
                }, {reload: true});
        };
//---------------------------------------------------------上下线-
        $scope.statuses = function (id, status) {
            var status = (status === 1) ? 2 : 1;
            var putaway, soldOut;
            if (status === 1) {
                putaway = "确定要下线吗";
                soldOut = "下线成功"
            } else if (status === 2) {
                putaway = "确定要上线吗";
                soldOut = "上线成功"
            }
            if (confirm(putaway)) {
                $http({
                    method: "PUT",
                    url: '/carrots-admin-ajax/a/u/article/status',
                    params: {
                        id: id,
                        status: status
                    }
                }).then(function (response) {
                    if (response.data.code === 0) {
                        alert(soldOut);
                        $state.go('home.page1', {}, {reload: true});
                    } else {
                        alert(response.data.message)
                    }

                })
            }
        };
//---------------------------------------------------------编辑-保存数据到page2-url
        $scope.compile = function (id) {
            $state.go('home.page2', {id: id}, {reload: true});
        };
//---------------------------------------------------------删除
        $scope.delete = function (id) {
            if (confirm("确定删除吗？")) {
                $http({
                    method: "DELETE",
                    url: " /carrots-admin-ajax/a/u/article/" + id
                }).then(function (response) {
                    if (response.data.code === 0) {
                        $state.go('home.page1', {}, {reload: true});
                        alert("删除成功");
                    } else {
                        alert(response.data.message)
                    }

                })
            }
        };
    });