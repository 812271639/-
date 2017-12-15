angular.module("myApp")

    .constant('types', [
        {typeName: "首页banner", typeNum: "0"},
        {typeName: "找职位", typeNum: "1"},
        {typeName: "找精英", typeNum: "2"},
        {typeName: "行业大图", typeNum: "3"}])

    .constant('state', [
        {stateName: "草稿", stateNum: "1"},
        {stateName: "上线", stateNum: "2"}
    ])
    .constant('status', [
        {statusName: "上线", statusNum: 2},
        {statusName: "下线", statusNum: 1}
    ])
    //-----------------------------------------------------编辑--------------------------------
    .constant('redactTypes', [
        {typeName: "首页banner", typeNum: 0},
        {typeName: "找职位", typeNum: 1},
        {typeName: "找精英", typeNum: 2},
        {typeName: "行业大图", typeNum: 3}])

    .constant('industries', [
        {industriesName: "移动互联网", industriesNum:0},
        {industriesName: "电子商务",  industriesNum: 1},
        {industriesName: "企业服务",  industriesNum: 2},
        {industriesName: "O2O",      industriesNum: 3},
        {industriesName: "教育",     industriesNum: 4},
        {industriesName: "金融",     industriesNum: 5},
        {industriesName: "保险",     industriesNum: 6}]);
// .constant('status',
//     {
//         1: "上线",
//         2:"下线"
//     }
// );