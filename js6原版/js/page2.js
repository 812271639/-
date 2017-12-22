angular.module("myApp", ["ui.router","angularFileUpload","meta.umeditor"])
    .controller("page2", function ($scope, $http, $state, $stateParams, FileUploader, redactTypes, industries, $timeout) {
    $scope.redactTypes = redactTypes;     //绑定常量
    $scope.industries = industries;
    if ($stateParams.id) {
        $scope.newArticle = "编辑article"
    } else {
        $scope.newArticle = "新增article"
    }
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
    $scope.removeResponseUrl = function () {
        $scope.responseUrl = null;
    };
//---------------------------------------------------新增和编辑------------------------------------------------
    $scope.config = {}; //百度编辑器获取内容
    $scope.CompleteModel = {
        text: ''
    };
    $timeout(function () {
        $scope.condition = true;
    }, 0);

    if ($stateParams.id) {
        $http({
            method: "GET",
            url: " /carrots-admin-ajax/a/article/" + $stateParams.id
        }).then(function (response) {                                 //编辑页面渲染数据
            $scope.article = response.data.data.article;
            $scope.headline = $scope.article.title;
            $scope.typeNum = $scope.article.type;
            $scope.industriesNum = $scope.article.industry;
            $scope.CompleteModel.text = $scope.article.content;
            $scope.links = $scope.article.url;
            $scope.responseUrl = $scope.article.img; //预览图片
            $scope.createAt = $scope.article.createAt;
        });
    }

    $scope.immediately = function (status) {
        $scope.industriesNum = ( $scope.typeNum == 3) ? $scope.industriesNum : "";
        $scope.paramData = {
            type: $scope.typeNum,
            title: $scope.headline,
            status: status,
            img: $scope.responseUrl,
            content: $scope.CompleteModel.text,
            url: $scope.links,
            industry: $scope.industriesNum,
            createAt: $scope.createAt
        };
        if ($stateParams.id) {
            $http({
                method: "PUT",
                url: " /carrots-admin-ajax/a/u/article/" + $stateParams.id,
                params: $scope.paramData,
                header: {"Content-Type": "application/x-www-form-urlencoded"}
            }).then(function () {
                if (status == 1) {
                    alert("编辑成功,已存为草稿");
                } else {
                    alert("编辑成功,已成功上线");
                }
                $state.go('home.page1', {}, {reload: true});
            });
        } else {
            $http({
                method: "POST",
                url: " /carrots-admin-ajax/a/u/article",
                params: $scope.paramData,
                header: {"Content-Type": "application/x-www-form-urlencoded"}
            }).then(function () {
                if (status == 1) {
                    alert("已存为草稿");
                } else {
                    alert("上线成功");
                }
                $state.go('home.page1', {}, {reload: true});
            });
        }
    };
    $scope.canceled = function () {
        $state.go('home.page1', {}, {reload: true});    //-取消上传-
    };
});

