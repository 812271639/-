var app = angular.module("myApp");
app.filter('typesFilter', function (types) {
    return function (input) {
        if (input !== "" && input !== undefined) {      //if 语句可以没有
            return types[input].typeName;      //返回输入所在对象的typeName
        }
    }
});
app.filter('stateFilter', function (state) {
    return function (input) {
            return state[input-1].stateName;      //返回输入所在对象的typeName
    }
});
app.filter("statusFilter",function (status) {
    return function (input) {
        return status[input-1].statusName;
    }
});