var app = angular.module("myApp");
app.filter('typesFilter', function (types) {
    return function (input) {
            return types[input];      //返回输入所在对象的typeName
        }
});
app.filter('stateFilter', function (states) {
    return function (input) {
            return states[input];      //返回输入所在对象的typeName
    }
});
app.filter("statusFilter",function (status) {
    return function (input) {
        return status[input];
    }
});