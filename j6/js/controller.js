//-----------------------------------------------------------home主页控制器------------------------------------------
//
// app.controller("home", function ($scope, $http, $state) {
//     $scope.state = $state;
//     $scope.hello = $state.includes('home.hello');
//     $scope.hello1 = $state.includes('home.hello1');
//     $scope.page1 = $state.includes('home.page1');
//     if ($scope.hello || $scope.hello1) {
//         $scope.firstUl = true;
//     }
//     $scope.firstFn = function () {
//         $scope.firstUl = !$scope.firstUl;
//         $scope.hello = false;
//         $scope.hello1 = false;
//         $scope.page1 = false;
//         $scope.secondUl = false;
//     };
//     if ($scope.page1) {
//         $scope.secondUl = true;
//     }
//     $scope.secondFn = function () {
//         $scope.secondUl = !$scope.secondUl;
//         $scope.firstUl = false;
//         $scope.page1 = false;
//     };
//     $scope.mainLeft = false;
//     $scope.topButton = function () {
//         $scope.mainLeft = !$scope.mainLeft;
//     };
//
// //------------------------------------------------------------退出-------------------------------------
//     $scope.logout = function () {
//         if (confirm("确定退出吗？")) {
//             $http({
//                 method: "POST",
//                 url: "/carrots-admin-ajax/a/logout"
//             }).then(function (response) {
//                 $state.go('login', {}, {reload: true});
//                 // alert(response.data.code + response.data.message);
//             })
//         }
//     }
// });

//--------------------------------------------------------登录控制器--------------------------------------
// app.controller('login', function ($scope, $http, $state) {
//     $scope.login = function () {
//         $http({
//             method: "POST",
//             url: '/carrots-admin-ajax/a/login',
//             // data:$.param({name:$scope.name,pwd:$scope.password}),
//             params: {
//                 name: $scope.name,
//                 pwd: $scope.password
//             },
//             // headers:{"Content-Type":"application/x-www-form-urlencoded"}  //data方法header要加 s .
//             header: {"Content-Type": "application/x-www-form-urlencoded"}      //params方法header不用加 s .
//         }).then(function (response) {
//             if (response.data.code === 0) {
//                 $state.go('home.welcome', {}, {reload: true})
//             }else if (response.data.code !== 0) {
//                 $scope.messages =response.data.message;
//             }
//
//         })
//     };
// });
//-----------------------------------------------page1控制器-----------------------------------------------
// app.controller("page1", function ($scope, $http, $stateParams, $state, $filter, types, state) {
//
//     $("#a,#b").datetimepicker({    //时间插件
//         language: 'zh-CN',
//         format: 'yyyy-mm-dd',
//         weekStart: 1,
//         autoclose: 1,
//         todayHighlight: 1,
//         startView: 2,
//         minView: 2,
//         forceParse: 0
//     });
//     //---------------------------------------------------------分页---------------------------------------------------
//     $scope.maxSize = 3;            //显示的数字
//     $scope.items = 10;             //每页多少条
//     $scope.bigTotalItems = 100000; //分页总数/给一个初始值，在http请求时再赋值覆盖掉，需要大于数据总数。
//     $scope.bigCurrentPage = 1;     //当前页
//     $scope.pageChanged = function () {
//         $state.go('home.page1', {
//             page: $scope.bigCurrentPage,  //传递参数到路由页面，保存在url里
//             size: $scope.size
//         }, {reload: true});
//     };
//     //
//     $scope.sure = function () {         //页面跳转点击事件
//         $state.go('home.page1', {
//             page: $scope.toPage,        //传递参数到路由页面，保存在url里
//             size: $scope.size
//         }, {reload: true});
//     };
// //-------------------------------------------------------------------------------------------------------
//     $scope.disc = 0;//id排序
//     $scope.params = $state.params;
//     $scope.types = types;                 //获取常量表types数据 ，应该是绑定作用域吧
//     $scope.state = state;
//     $scope.status = status;
//     //  $scope.start= $filter('date')($stateParams.startAt, 'yyyy-MM-dd ');//保存状态
//     //  $scope.end =  $filter('date')(, 'yyyy-MM-dd ')  ;
//     $scope.start = Date.parse($stateParams.startAt);
//     $scope.end = Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99);
//     $scope.start = ($scope.start) ? $scope.start : "";             //添加默认值
//     $scope.end = ( $scope.end ) ? $scope.end : "";
//     $scope.bigCurrentPage = ($stateParams.page ) ? $stateParams.page : 1;     //添加默认值'
//     $scope.size = ($stateParams.size) ? $stateParams.size : 10;
//     $scope.items = ($stateParams.size) ? $stateParams.size : 10;
//     $scope.startTime = $stateParams.startAt;                        //保存状态
//     $scope.endTime = $stateParams.endAt;
//     $scope.typeNum = $stateParams.type;                             //保存状态
//     $scope.stateNum = $stateParams.status;
//
//     $http({                                                         //请求加载页面获取数据
//         method: "GET",
//         url: '/carrots-admin-ajax/a/article/search',
//         params: {
//             page: $stateParams.page,
//             size: $stateParams.size,
//             // startAt: Date.parse($stateParams.startAt),   //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
//             // endAt:   Date.parse($stateParams.endAt) + ( 16 * 60 * 60 * 999.99),
//             startAt: $scope.start,                                    //传递参数到路由页面，保存在url里
//             endAt: $scope.end,
//             type: $stateParams.type,
//             status: $stateParams.status
//         }
//     }).then(function (response) {
//         $scope.articleList = response.data.data.articleList;          // 返回的数据
//         $scope.total = response.data.data.total;          // 返回的数据
//         $scope.bigTotalItems = $scope.total; //总数
//     });
// //--------------------------------------------------------------------------------------------------
//     $scope.search = function () {                                      //搜索点击事件
//         $state.go('home.page1',
//             {
//                 // startAt: Date.parse($scope.startTime),  //传递参数到路由页面，保存在url里// -(8 *60 * 60 *1000 )
//                 // endAt:   Date.parse($scope.endTime) + ( 16 * 60 * 60 * 999.99),
//                 startAt: $scope.startTime,
//                 endAt: $scope.endTime,
//                 type: $scope.typeNum,
//                 status: $scope.stateNum
//             }, {reload: true});
//     };
//     $scope.clear = function () {
//         $state.go('home.page1',
//             {
//                 startAt: "",
//                 endAt: "",
//                 type: "",
//                 status: "",
//                 page: "",
//                 size: ""
//             }, {reload: true});
//     };
// //---------------------------------------------------------上下线---------------------------------------------
//     $scope.statuses = function (x, y) {
//         var z = (y == 1) ? 2 : 1;
//         var q;
//         var p;
//         if (z == 1) {
//             q = "确定要下线吗";
//             p = "下线成功"
//         } else if (z == 2) {
//             q = "确定要上线吗";
//             p = "上线成功"
//         }
//         if (confirm(q)) {
//             $http({
//                 method: "PUT",
//                 url: '/carrots-admin-ajax/a/u/article/status',
//                 params: {
//                     id: x,
//                     status: z
//                 }
//             }).then(function () {
//                 alert(p);
//                 $state.go('home.page1', {}, {reload: true});
//             })
//         }
//     };
// //-------------------------------------------编辑-保存数据到page2-url-------------------------------------
//     $scope.compile = function (id) {
//         $state.go('home.page2', {id: id}, {reload: true});
//     };
// //---------------------------------------------------------删除--------------------------------------------
//     $scope.delete = function (id) {
//         if (confirm("确定删除吗？")) {
//             $http({
//                 method: "DELETE",
//                 url: " /carrots-admin-ajax/a/u/article/" + id
//             }).then(function (response) {
//                 $state.go('home.page1', {}, {reload: true});
//                 alert("删除成功" + response.data.code + response.data.message);
//             })
//         }
//     };
// });
//---------------------------------------------------page2控制器----------------------------------------
//
// app.controller("page2", function ($scope, $http, $state, $stateParams, FileUploader, redactTypes, industries, $timeout) {
//     $scope.redactTypes = redactTypes;     //绑定常量
//     $scope.industries = industries;
//     if($stateParams.id){
//         $scope.newArticle = "编辑article"
//     }else {
//         $scope.newArticle = "新增article"
//     }
//     //------------------------------------------------------------上传图片--------------------------------------------
//     var uploader = $scope.uploader = new FileUploader({
//         method: "POST",
//         url: '/carrots-admin-ajax/a/u/img/task',
//         formData: [{}],                            //与文件一起发送的表单数据
//         queueLimit: 1
//         // removeAfterUpload: true                 //上传后删除文件
//     });
//     //重新选择文件时，清空队列，达到覆盖文件的效果
//     $scope.clearItems = function () {
//         uploader.clearQueue();
//         console.log("clear");
//     };
//     //图片预览的回调函数
//     uploader.onSuccessItem = function (fileItem, response) {
//         console.log(fileItem);
//         console.log(fileItem.uploader);
//         console.log(fileItem.uploader.queue);
//         console.log(fileItem.uploader.queue[0].isSuccess);
//         console.log(fileItem.uploader.queue[0].remove);
//         $scope.responseUrl = response.data.url;              //获取返回的url地址，作为$http的img参数传入
//     };
//     $scope.removeResponseUrl = function () {
//         $scope.responseUrl = null;
//     };
// //---------------------------------------------------新增和编辑------------------------------------------------
//     $scope.config = {};
//     $scope.CompleteModel = {
//         text: ''
//     };
//     $timeout(function () {
//         $scope.condition = true;
//     }, 0);                          //百度编辑器获取内容
//
//     if ($stateParams.id) {
//         $http({
//             method: "GET",
//             url: " /carrots-admin-ajax/a/article/" + $stateParams.id
//         }).then(function (response) {
//             $scope.article = response.data.data.article;
//             $scope.headline = $scope.article.title;
//             $scope.typeNum = $scope.article.type;
//             $scope.industriesNum = $scope.article.industry;
//             $scope.CompleteModel.text = $scope.article.content;
//             $scope.links = $scope.article.url;
//             $scope.responseUrl = $scope.article.img; //预览图片
//             $scope.createAt = $scope.article.createAt;
//         });
//     }
//
//     $scope.immediately = function (status) {
//         $scope.industriesNum = ( $scope.typeNum != 3) ? $scope.industriesNum : "";
//         if ($stateParams.id) {
//             $http({
//                 method: "PUT",
//                 url: " /carrots-admin-ajax/a/u/article/" + $stateParams.id,
//                 params: {
//                     type: $scope.typeNum,
//                     title: $scope.headline,
//                     status: status,
//                     img: $scope.responseUrl,
//                     content: $scope.CompleteModel.text,
//                     url: $scope.links,
//                     industry: $scope.industriesNum,
//                     createAt: $scope.createAt
//                 },
//                 header: {"Content-Type": "application/x-www-form-urlencoded"}
//             }).then(function () {
//                 if (status == 1) {
//                     alert("编辑成功,已存为草稿");
//                 } else {
//                     alert("编辑成功,已成功上线");
//                 }
//                 $state.go('home.page1', {}, {reload: true});
//             });
//         } else {
//             $http({
//                 method: "POST",
//                 url: " /carrots-admin-ajax/a/u/article",
//                 params: {
//                     title: $scope.headline,
//                     type: $scope.typeNum,
//                     status: status,
//                     img: $scope.responseUrl,
//                     content: $scope.CompleteModel.text,
//                     url: $scope.links,
//                     industry: $scope.industriesNum
//                 },
//                 header: {"Content-Type": "application/x-www-form-urlencoded"}
//             }).then(function () {
//                 if (status == 1) {
//                     alert("已存为草稿");
//                 } else {
//                     alert("上线成功");
//                 }
//
//                 $state.go('home.page1', {}, {reload: true});
//             });
//         }
//
//     };
//
//     //------------------------------------------------------------取消上传----------------------------------------
//     $scope.canceled = function () {
//         $state.go('home.page1', {}, {reload: true});
//     };
//     var um = UM.getEditor('myEditor');
//     um.addListener('blur', function () {
//         $('#focush2').html('编辑器失去焦点了')
//     });
//     um.addListener('focus', function () {
//         $('#focush2').html('')
//     });
// });
//
