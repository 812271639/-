// var app = angular.module("myApp");
// app.filter('typesFilter', function (types) {
//     return function (input) {
//         return types[input];
//     }
// });
// app.filter('stateFilter', function (states) {
//     return function (input) {
//         return states[input];
//     }
// });
// app.filter("putAwayFilter", function (putAway) {
//     return function (input) {
//         return putAway[input];
//     }
// });

var app = angular.module("myApp");
app.filter('typesFilter', function (types) {
    return function (input) {
        if (input !== "" && input !== undefined) {
            return types[input];
        } else {
            return "无";
        }
    }
});
app.filter('stateFilter', function (states) {
    return function (input) {
        if (input !== "" && input !== undefined) {
            return states[input];
        } else {
            return "无";
        }
    }
});
app.filter("putAwayFilter", function (putAway) {
    return function (input) {
        if (input !== "" && input !== undefined) {
            return putAway[input];
        } else {
            return "无";
        }
    }

});