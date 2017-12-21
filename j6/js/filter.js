app.filter('typesFilter', function (types) {
    return function (input) {
        if (input !== "" && input !== undefined) {      //if 语句可以没有
            return types[input].typeName;      //返回输入所在对象的typeName
        }
    }
});
app.filter('stateFilter', function (state) {
    return function (input) {
        // if (input !== "" && input !== undefined) {      //if 语句可以没有
            return state[input-1].stateName;      //返回输入所在对象的typeName
        // }
    }
});

// app.filter("id",function () {


    // var input =0;
    // return function () {
    //    input +=1;
    //     return input;
    // }
// });
app.filter("statusFilter",function (status) {
    return function (input) {
        // console.log(input);
        // console.log(status[input]);
        // // console.log(status[input].statusName);
        // console.log(status[input-1].statusName);
        return status[input-1].statusName;
    }
});