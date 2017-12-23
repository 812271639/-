angular.module("myApp", ["ui.router", "angularFileUpload", "meta.umeditor"])
    .controller("page2", function ($scope, $http, $state, $stateParams, FileUploader, types, industries,articleState) {
        $scope.types = types;                    //绑定常量
        $scope.industries = industries;
//-----------------------------------------------新增和编辑------------------------------------------------
        if ($stateParams.id) {
            $http({
                method: "GET",
                url: " /carrots-admin-ajax/a/article/" + $stateParams.id
            }).then(function (response) {
                if (response.data.code === 0) {
                    $scope.article = response.data.data.article;
                    $scope.article.industry=String($scope.article.industry);//需要将返回的数据转成string，否则下拉列表出现空格
                    $scope.CompleteModel.text = $scope.article.content;//文本编辑器必须使用CompleteModel.text，其他字符无法绑定
                    $scope.responseUrl = $scope.article.img; //编辑时预览图片
                } else {
                    alert(response.data.message)
                }
            });
        }
        $scope.immediately = function (status) {
            $scope.article.industry = ( $scope.article.type === 3) ? $scope.article.industry : "";
            $scope.article.content = $scope.CompleteModel.text;
            $scope.article.img = $scope.responseUrl;
            $scope.article.status = status;
            if ($stateParams.id) {
                $http({
                    method: "PUT",
                    url: " /carrots-admin-ajax/a/u/article/" + $stateParams.id,
                    params: $scope.article,
                    header: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (response) {
                    if (response.data.code === 0) {
                        if (status === articleState["onLine"]) {
                            alert("编辑成功,已成功上线");
                        } else {
                            alert("编辑成功,已存为草稿");
                        }
                        $state.go('home.page1', {}, {reload: true});
                    } else {
                        alert(response.data.message);
                    }
                });
            } else {
                $http({
                    method: "POST",
                    url: " /carrots-admin-ajax/a/u/article",
                    params: $scope.article,
                    header: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (response) {
                    if (response.data.code === 0) {
                        if (status === articleState["onLine"]) {
                            alert("上线成功");
                        } else {
                            alert("已存为草稿");
                        }
                        $state.go('home.page1', {}, {reload: true});
                    } else {
                        alert(response.data.message);
                    }
                });
            }
        };
        $scope.canceled = function () {
            $state.go('home.page1', {}, {reload: true});    //-取消上传-
        };
//------------------------------------------------------------上传图片--------------------------------------------
        var uploader = $scope.uploader = new FileUploader({
            method: "POST",
            url: '/carrots-admin-ajax/a/u/img/task',
            queueLimit: 1
        });
                                                                 //重新选择文件时，清空队列，达到覆盖文件的效果
        $scope.clearItems = function () {
            uploader.clearQueue();
        };
                                                                 //图片预览的回调函数
        uploader.onSuccessItem = function (fileItem, response) {
            $scope.responseUrl = response.data.url;              //获取返回的url地址，作为$http的img参数传入
        };
        $scope.removeResponseUrl = function () {                 //点击删除清空responseUrl，用于按钮disable判断
            $scope.responseUrl = null;
        };
        //----------------------------------------------------
        $scope.config = {};                                      //百度编辑器获取内容
        $scope.CompleteModel = {
            text: ''
        };
        $scope.condition = true;
//---------------------------------------------------------
        if ($stateParams.id) {
            $scope.newArticle = "编辑article"
        } else {
            $scope.newArticle = "新增article"
        }

    });

