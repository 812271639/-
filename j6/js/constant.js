angular.module("myApp")

    .constant('types', [
        {typeName: "全部", typeNum: ""},
        {typeName: "首页banner", typeNum: 0},
        {typeName: "找职位banner", typeNum: 1},
        {typeName: "找精英banner", typeNum: 2},
        {typeName: "行业大图", typeNum: 3}])

    .constant('state', [
        {stateName: "全部", stateNum: ""},
        {stateName: "上线", stateNum: 2},
        {stateName: "草稿", stateNum: 1}
    ]);