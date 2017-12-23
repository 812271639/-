angular.module("myApp", ["ui.router", "ui.bootstrap"])
    .controller("page1", function ($scope, $http, $stateParams, $state, $filter, types, states, articleState) {
        $scope.params = $state.params;
        $scope.states = states;
        $scope.types = types;
        $scope.params.startAt = ($scope.params.startAt) ? ( Date.parse($scope.params.startAt) - ( 8 * 60 * 60 * 1000)) : "";
        $scope.params.endAt = ($scope.params.endAt) ? ( Date.parse($scope.params.endAt) + ( 16 * 60 * 60 * 1000 - 1)) : "";
        $http({
            method: "GET",
            url: '/carrots-admin-ajax/a/article/search',
            params: $scope.params
        }).then(function (response) {
            if (response.data.code === 0) {
                $scope.articleList = response.data.data.articleList;       // 返回的数据
                $scope.total = response.data.data.total;                      // 返回的数据用于分页插件
                $scope.bigTotalItems = $scope.total;                          //分页插件的总数
            } else {
                alert(response.data.message)
            }
        });
//--------------------------------------------------------------------搜索&清空的点击事件
        $scope.clearSearch = function (startAt, endAt, type, status) {
            $state.go('home.page1', {
                startAt: startAt,
                endAt: endAt,
                type: type,
                status: status
            }, {reload: true});
        };
//-------------------------------------------------------------------上下线-
        $scope.statuses = function (id, parameterStatus) {
            var Status = (parameterStatus === articleState["offLine"]) ? articleState["onLine"] : articleState["offLine"];
            var putAway, soldOut;
            if (Status === articleState["offLine"]) {
                putAway = "确定要下线吗";
                soldOut = "下线成功"
            } else if (Status === articleState["onLine"]) {
                putAway = "确定要上线吗";
                soldOut = "上线成功"
            }
            if (confirm(putAway)) {
                $http({
                    method: "PUT",
                    url: '/carrots-admin-ajax/a/u/article/status',
                    params: {
                        id: id,
                        status: Status
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
//---------------------------------------------------------编辑-传递id到page2-url
        $scope.compile = function (id) {
            $state.go('home.page2', {id: id}, {reload: true});
        };
//----------------------------------------------------------删除
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
        //------------------------------------------------------------分页-------------------------------
        $scope.maxSize = 3;            //分页显示的数字
        $scope.bigTotalItems = 100000; //分页总数/给一个初始值，在http请求时再赋值覆盖掉，需要大于数据总数。
        $scope.bigCurrentPage = ($stateParams.page ) ? $stateParams.page : 1;      //添加默认值'
        $scope.size = ($stateParams.size) ? $stateParams.size : 10;
        $scope.items = ($stateParams.size) ? $stateParams.size : 10;
        $scope.pageChanged = function (page) {
            $state.go('home.page1', {
                page: page,        //传递参数到路由页面，保存在url里
                size: $scope.size
            }, {reload: true});
        };
    });