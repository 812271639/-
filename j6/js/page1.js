

app.controller("page1",function ($scope,$http) {
    $scope.types = ["全部","首页banner","找职位banner","找精英banner","行业大图"];
    $scope.states = ["全部","上线","草稿"];
    $scope.initName = "全部";
    $http({
        method:"GET",
        url: '/carrots-admin-ajax/a/article/search'
    }).then(function (response) {
        $scope.articleList = response.data.data.articleList;
        console.log($scope.articleList)
    })
});