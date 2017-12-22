angular.module("myApp", ["ui.router"])
    .controller("login", function ($scope, $http, $state) {
        $scope.login = function () {
            $http({
                method: "POST",
                url: '/carrots-admin-ajax/a/login',
                // data:$.param({name:$scope.name,pwd:$scope.password}),
                params: {
                    name: $scope.name,
                    pwd: $scope.password
                },
                // headers:{"Content-Type":"application/x-www-form-urlencoded"}    //data方法header要加 s .
                header: {"Content-Type": "application/x-www-form-urlencoded"}      //params方法header不用加 s .
            }).then(function (response) {
                if (response.data.code === 0) {
                    $state.go('home.welcome', {}, {reload: true})
                }else if (response.data.code !== 0) {
                    $scope.messages =response.data.message;
                }
            })
        };
    });