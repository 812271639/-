
app.controller("home", function ($scope, $http, $state) {
    $scope.state = $state;
    $scope.hello = $state.includes('home.hello');
    $scope.hello1 = $state.includes('home.hello1');
    $scope.page1 = $state.includes('home.page1');
    if ($scope.hello || $scope.hello1) {
        $scope.firstUl = true;
    }
    $scope.firstFn = function () {
        $scope.firstUl = !$scope.firstUl;
        $scope.hello = false;
        $scope.hello1 = false;
        $scope.page1 = false;
        $scope.secondUl = false;
    };
    if ($scope.page1) {
        $scope.secondUl = true;
    }
    $scope.secondFn = function () {
        $scope.secondUl = !$scope.secondUl;
        $scope.firstUl = false;
        $scope.page1 = false;
    };
    $scope.mainLeft = false;
    $scope.topButton = function () {
        $scope.mainLeft = !$scope.mainLeft;
    };

//------------------------------------------------------------退出-------------------------------------
    $scope.logout = function () {
        if (confirm("确定退出吗？")) {
            $http({
                method: "POST",
                url: "/carrots-admin-ajax/a/logout"
            }).then(function (response) {
                $state.go('login', {}, {reload: true});
                // alert(response.data.code + response.data.message);
            })
        }
    }
});
