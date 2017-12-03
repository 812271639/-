app.controller("page1",function ($scope,$http) {
    $scope.types = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
    $scope.states = ["全部","小姐姐","另一个小姐姐","还有一个小姐姐"];
    $http({
        method:"GET",
        url: '/carrots-admin-ajax/a/article/search'
    }).then(function (response) {
        $scope.articleList = response.data.data.articleList;
        console.log($scope.articleList)
    })
});