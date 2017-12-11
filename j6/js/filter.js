app.filter('typesFilter', function (types) {
    return function (input) {
        if (input !== "" && input !== undefined) {      //if 语句可以没有
            return types[input].typeName;      //返回输入所在对象的typeName
        }
    }
});
app.filter('statusFilter', function (state) {
    return function (input) {
        // if (input !== "" && input !== undefined) {      //if 语句可以没有
            return state[input-1].stateName;      //返回输入所在对象的typeName
        // }
    }
});