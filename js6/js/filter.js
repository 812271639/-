var app = angular.module("myApp");
app.filter('typesFilter', function (types) {
    return function (input) {
        return types[input];
    }
});
app.filter('stateFilter', function (states) {
    return function (input) {
        return states[input];
    }
});
app.filter("putAwayFilter", function (putAway) {
    return function (input) {
        return putAway[input];
    }
});