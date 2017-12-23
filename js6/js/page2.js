angular.module("myApp", ["ui.router", "angularFileUpload", "meta.umeditor"])
    .controller("page2", function ($scope, $http, $state, $stateParams, FileUploader, types, industries) {
        $scope.types = types;     //绑定常量
        $scope.industries = industries;
        console.log($scope);
        console.log($scope.article);
//---------------------------------------------------新增和编辑------------------------------------------------
        if ($stateParams.id) {
            $http({
                method: "GET",
                url: " /carrots-admin-ajax/a/article/" + $stateParams.id
            }).then(function (response) {
                if (response.data.code === 0) {
                    $scope.article = response.data.data.article;
                    $scope.CompleteModel.text = $scope.article.content;
                    $scope.responseUrl = $scope.article.img; //预览图片
                    $scope.createAt = $scope.article.createAt;
                } else {
                    alert(response.data.message)
                }

            });
        }
        $scope.immediately = function (status) {
            $scope.article.industry = ( $scope.article.type == 3) ? $scope.article.industry : "";
            $scope.paramData = {
                type: $scope.article.type,
                title: $scope.article.title,
                status: status,
                img: $scope.responseUrl,
                content: $scope.CompleteModel.text,
                url: $scope.article.url,
                industry: $scope.article.industry,
                createAt: $scope.createAt
            };
            if ($stateParams.id) {
                $http({
                    method: "PUT",
                    url: " /carrots-admin-ajax/a/u/article/" + $stateParams.id,
                    params: $scope.paramData,
                    header: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (response) {
                    if (response.data.code === 0) {
                        if (status == 1) {
                            alert("编辑成功,已存为草稿");
                        } else {
                            alert("编辑成功,已成功上线");
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
                    params: $scope.paramData,
                    header: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (response) {
                    if (response.data.code === 0) {
                        if (status == 1) {
                            alert("已存为草稿");
                        } else {
                            alert("上线成功");
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
        $scope.removeResponseUrl = function () {//点击删除清空responseUrl，用于按钮disable判断
            $scope.responseUrl = null;
        };
        //----------------------------------------------------
        $scope.config = {}; //百度编辑器获取内容
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

