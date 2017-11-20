
///////////////////////////////////////////////////////法官日志页jQuery ////////////////////////////////////////////////

$(document).ready(function () {
    var arr2 = JSON.parse(localStorage.getItem("user"));     //取出数据
    for (var i = 0; i < arr2.length; i++) {
        $(".identity").append("<div class=\"identity-main\">\n" +
            "<div class=\"card\">\n" +
            "<div class=\"farmer\">"+ arr2[i] +"</div>\n" +
            "<div class=\"number\">" + (i + 1) + "号</div>\n" +
            "</div>\n" +
            "<div class=\"killKnife\"><img src=\"../picture/knife.png\"></div>\n" +
            "</div>");
        // .append("<div class=\"card\">\n" +
        //     "<div class=\"farmer\">" + arr2[i] +
        //     "</div>\n" + "<div class=\"number\">" + (i + 1) + "号</div>\n" + "</div>");
    }

});
$(document).ready(function () {
    $("#judge-seeing").click(function () {
        location.href = 'player-ratio.html';
    });
    $("#begin").click(function () {
        location.href = 'judge-diary.html';
    });

    var died2 = localStorage.getItem('died2');                //使用变量保存在localStorage中的死亡状态 Died
    var arr3 = JSON.parse(localStorage.getItem('arr3'));//保存杀人步骤死亡玩家，避免加载页面时从新清空保存在localStorage里的数组
    if(died2 === 'died'){
        for(var i=0;i<arr3.length;i++){
            $( $('.card')[arr3[i]])
                .addClass('b')      //如果玩家状态为 died 玩家改变玩家颜色
                .off('click')       //移除被杀玩家点击事件
                .next().off('click')
        }
    }
    if(died2 === 'died'){
        $("#begin").text("返回游戏");
    }
});
