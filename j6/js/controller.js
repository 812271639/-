//-----------------------------------------------------------home主页控制器------------------------------------------

app.controller("home", function ($scope, $http, $state) {
    // $(document).ready(function () {
    $("#leftTOP").click(function () {
        $("#firstDown").toggleClass("glyphicon-chevron-down");
        $("#firstUl").toggle();
        $("#secondUl").hide();
    });
    $("#leftBottom").click(function () {
        $("#secondDown").toggleClass("glyphicon-chevron-down");
        $("#secondUl").toggle();
        $("#firstUl").hide();
    });
    $("#topButton").click(function () {
        $(".mainLeft").toggle();
    });
    // });
    $scope.logout = function () {

        $http({
            method: "POST",
            url: "/carrots-admin-ajax/a/logout"
        }).then(function (response) {
            $state.go('login', {}, {reload: true});
            alert(response.data.code + response.data.message);
        })
    }
});

//--------------------------------------------------------登录控制器--------------------------------------------------
app.controller('login', function ($scope, $http, $state) {
    $scope.login = function () {
        $http({
            method: "POST",
            url: '/carrots-admin-ajax/a/login',
            // data:$.param({name:$scope.name,pwd:$scope.password}),
            params: {
                name: $scope.name,
                pwd: $scope.password
            },
            // headers:{"Content-Type":"application/x-www-form-urlencoded"}  //data方法header要加 s .
            header: {"Content-Type": "application/x-www-form-urlencoded"}      //params方法header不用加 s .
        }).then(function (response) {
            if (response.data.code === 0) {
                $scope.messages = "success";
                $state.go('home.hello', {}, {reload: true})
            }
            // else if($scope.name !== "admin") {
            //     $scope.messages = "无效账号";
            // }else if($scope.password !== "123456"){
            //     $scope.messages = "密码错误";
            // }
        })
    };
});
//-----------------------------------------------page1控制器-----------------------------------------------
app.controller("page1", function ($scope, $http, $stateParams, $state, $filter, types, state) {
    $("#a,#b").datetimepicker({    //时间插件
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $scope.params = $state.params;
    $scope.types = types;                                               //获取常量表types数据 ，应该是绑定作用域吧
    $scope.state = state;
    $scope.status = status;
    //
    //  $scope.start= $filter('date')($stateParams.startAt, 'yyyy-MM-dd ');//保存状态
    //  $scope.end =  $filter('date')(, 'yyyy-MM-dd ')  ;
    $scope.start = Date.parse($stateParams.startAt);
    $scope.end = Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99);
    $scope.start = ($scope.start) ? $scope.start : "";             //添加默认值
    $scope.end = ( $scope.end ) ? $scope.end : "";
    $scope.page = ($stateParams.page ) ? $stateParams.page : 1;     //添加默认值
    $scope.size = ($stateParams.size) ? $stateParams.size : 10;
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
            // startAt: Date.parse($stateParams.startAt),   //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
            // endAt:   Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99),
            startAt: $scope.start,                                    //传递参数到路由页面，保存在url里
            endAt: $scope.end,
            type: $stateParams.type,
            status: $stateParams.status
        }
    }).then(function (response) {
        $scope.articleList = response.data.data.articleList;          // 返回的数据

    });

    $scope.sure = function () {                                       //分页点击事件
        $state.go('home.page1', {
                page: $scope.page,                                     //传递参数到路由页面，保存在url里
                size: $scope.size
            }, {reload: true});
    };
    $scope.search = function () {                                      //搜索点击事件
        $state.go('home.page1',
            {
                // startAt: Date.parse($scope.startTime),  //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
                // endAt:   Date.parse($scope.endTime) + ( 16 * 60 * 60 * 999.99),
                startAt: $scope.startTime,
                endAt: $scope.endTime,
                type: $scope.typeNum,
                status: $scope.stateNum
            }, {reload: true});
    };
    $scope.clear = function () {
        $state.go('home.page1',
            {
                startAt: "",
                endAt: "",
                type: "",
                status: "",
                page: "",
                size: ""
            }, {reload: true});
    };
//---------------------------------------------------------上下线---------------------------------------------
    $scope.statuses = function (x, y) {
        var z = (y == 1) ? 2 : 1;
        $http({
            method: "PUT",
            url: '/carrots-admin-ajax/a/u/article/status',
            params: {
                id: x,
                status: z
            }
        }).then(function (response) {
            alert(response.data.code + response.data.message);
            $state.go('home.page1', {}, {reload: true});
        })
    };
    //-------------------------------------------编辑-保存数据到page2url-------------------------------------
    $scope.compile = function (id) {
        $state.go('home.page2', {id:id}, {reload: true});
    };
//---------------------------------------------------------删除--------------------------------------------
    $scope.delete = function (id) {
        $http({
            method: "DELETE",
            url: " /carrots-admin-ajax/a/u/article/" + id
        }).then(function (response) {
            $state.go('home.page1', {}, {reload: true});
            alert("成功" + response.data.code + response.data.message);
        })
    };

});

//---------------------------------------------------page2控制器----------------------------------------

app.controller("page2", function ($scope, $http, $state,$stateParams, FileUploader, redactTypes, industries ) {
    $scope.redactTypes = redactTypes;     //绑定常量
    $scope.industries  = industries;
    //------------------------------------------------------------上传图片--------------------------------------------
    var uploader = $scope.uploader = new FileUploader({
        method: "POST",
        url: '/carrots-admin-ajax/a/u/img/task',
        formData: [{}],                            //与文件一起发送的表单数据
        queueLimit: 1
        // removeAfterUpload: true                 //上传后删除文件
    });
    //重新选择文件时，清空队列，达到覆盖文件的效果
    $scope.clearItems = function () {
        uploader.clearQueue();
        console.log("clear");
    };
                                                             //图片预览的回调函数
    uploader.onSuccessItem = function (fileItem, response) {
        $scope.responseUrl = response.data.url;              //获取返回的url地址，作为$http的img参数传入
        // var reader = new FileReader();
        // reader.addEventListener("load", function (e) {
        //     $scope.$apply(function () {
        //         $scope.iconUrl = e.target.result;
        //     });
        // }, false);
        // reader.readAsDataURL(fileItem._file);
    };
//----------------------------------------------------------立即上线-------------------------------------------
    if($stateParams.id){
        $http({
            method:"GET",
            url:" /carrots-admin-ajax/a/article/"+ $stateParams.id
        }).then(function (response) {
            $scope.article = response.data.data.article;
            $scope.headline = $scope.article.title;
            $scope.typeNum = $scope.article.type;
            $scope.industriesNum = $scope.article.industry;
            $scope.explain = $scope.article.content;
            $scope.links = $scope.article.url;
            $scope.responseUrl = $scope.article.img; //预览图片
            $scope.createAt = $scope.article.createAt;
        });
    }
//-------------------------------------------------------新增和编辑------------------------------------------
    $scope.immediately = function (status) {
        if($stateParams.id){
                $http({
                    method:"PUT",
                    url:" /carrots-admin-ajax/a/u/article/"+ $stateParams.id,
                    params: {
                        type:$scope.typeNum,
                        title: $scope.headline,
                        status: status,
                        img: $scope.responseUrl,
                        content: $scope.explain,
                        url: $scope.links,
                        industry: $scope.industriesNum,
                        createAt:$scope.createAt
                    },
                    header: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (response) {
                    alert( "编辑成功"+ response.data.code + response.data.message);
                    $state.go('home.page1', {}, {reload: true});
                });
        }else {
            $http({
                method: "POST",
                url: " /carrots-admin-ajax/a/u/article",
                params: {
                    title: $scope.headline,
                    type: $scope.typeNum,
                    status: status,
                    img: $scope.responseUrl,
                    content: $scope.explain,
                    url: $scope.links,
                    industry: $scope.industriesNum
                },
                header: {"Content-Type": "application/x-www-form-urlencoded"}
            }).then(function (response) {
                alert( "上线成功"+ response.data.code + response.data.message);
                $state.go('home.page1', {}, {reload: true});
            });
        }

    };
    //------------------------------------------------------------取消上传----------------------------------------
    $scope.canceled = function () {
        $state.go('home.page1', {}, {reload: true});
    };
});

