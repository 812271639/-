angular.module("myApp")
// //------------------------------下拉列表--------------

    .constant('states', {
        1: "草稿",
        2: "上线"
    })
    .constant('status', {
        1: "下线",
        2: "上线"
    })
    .constant('types', {
        0: "首页banner",
        1: "找职位",
        2: "找精英",
        3: "行业大图"
    })
    .constant('industries', {
        0: "移动互联网",
        1: "电子商务",
        2: "企业服务",
        3: "O2O",
        4: "教育",
        5: "金融",
        6: "保险"
    });
//----------------------编辑---------
// .constant('types', {
//     '0': "首页banner",
//     '1': "找职位",
//     '2': "找精英",
//     '3': "行业大图"
// })
// .constant('industries', {
//     '0': "移动互联网",
//     '1': "电子商务",
//     '2': "企业服务",
//     '3': "O2O",
//     '4': "教育",
//     '5' : "金融",
//     '6':"保险"
// });