
angular.module("myApp", [ "ui.router"])
    .controller("home", function ($scope, $http, $state) {

    $scope.state = $state;
    $scope.hello = $state.includes('home.hello');    //侧边栏高亮显示保存状态
    $scope.hello1 = $state.includes('home.hello1');
    $scope.page1 = $state.includes('home.page1');
    if ($scope.hello || $scope.hello1) {
        $scope.firstUl = true;
    }
    $scope.firstFn = function () {                   //侧边栏信息管理系统点击事件
        $scope.firstUl = !$scope.firstUl;
        $scope.hello = false;
        $scope.hello1 = false;
        $scope.page1 = false;
        $scope.secondUl = false;
    };
    if ($scope.page1) {
        $scope.secondUl = true;
    }
    $scope.secondFn = function () {                 //侧边栏Article管理点击事件
        $scope.secondUl = !$scope.secondUl;
        $scope.firstUl = false;
        $scope.page1 = false;
    };
    $scope.mainLeft = false;
    $scope.topButton = function () {                 //屏幕缩小后顶部按钮点击事件
        $scope.mainLeft = !$scope.mainLeft;
    };

//------------------------------------------------------------退出-------------------------------------
    $scope.logout = function () {
        if (confirm("确定退出吗？")) {
            $http({
                method: "POST",
                url: "/carrots-admin-ajax/a/logout"
            }).then(function () {
                $state.go('login', {}, {reload: true});
            })
        }
    }
});
