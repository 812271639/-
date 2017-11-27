//
angular.module('routingDemoApp',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{template:'这是首页页面'})
            .when('/computers',{template:'这是电脑分类页面'})
            .when('/printers',{template:'这是打印机页面'})
            .otherwise({redirectTo:'/'});
    }]);
var l = "I ";

if(l === true){
    return "kill"
}