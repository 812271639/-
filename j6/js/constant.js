angular.module("myApp")

    .constant('types', [
        {typeName: "首页banner", typeNum: "0"},
        {typeName: "找职位",     typeNum: "1"},
        {typeName: "找精英",     typeNum: "2"},
        {typeName: "行业大图",   typeNum: "3"}])

    .constant('state', [
        {stateName: "草稿", stateNum: "1"},
        {stateName: "上线", stateNum: "2"}
    ])
    .constant('status', [
        {statusName: "上线", statusNum: 2},
        {statusName: "下线", statusNum: 1}
    ]);
    // .constant('status',
    //     {
    //         1: "上线",
    //         2:"下线"
    //     }
    // );