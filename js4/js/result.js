//
//
//
//
var arr3 = JSON.parse(localStorage.getItem('arr3'));//保存杀人步骤死亡玩家的顺序，避免加载页面时从新清空保存在localStorage里的数组
var arr5 = JSON.parse(localStorage.getItem('arr5'));        // 杀手长度
var arr6 = JSON.parse(localStorage.getItem('arr6'));        // 平民长度
var condition = JSON.parse(localStorage.getItem('condition'));      //用localStorage 以JSON 格式保存 数组
var arr4 = JSON.parse(localStorage.getItem('arr4'));        //用来保存被杀死玩家condition对象
var arr7 = JSON.parse(localStorage.getItem('arr7'));         //保存被投死玩家condition对象
var killer = JSON.parse(localStorage.getItem('killer'));         //杀手
var civilian = JSON.parse(localStorage.getItem('civilian'));     //平民
var v1 = localStorage.getItem("v1");  //获取平民词组传过来的值
var v2 = localStorage.getItem("v2"); //获取杀手词组传过来的值

$(document).ready(function () {

    for(var i=0;i <arr4.length;i ++){
    $(".record").append(
        "<div class=\"row \">\n" +
        "<div class=\"col-xs-6 left\">\n" +
        "第"+(i+1)+"天\n" +
        "</div>\n" +
        "<div class=\"col-xs-6 right\">\n" +
        "0小时07分\n" +
        "</div>\n" +
        "</div>\n" +
        "<div class=\"row \">\n" +
        "<div class=\"result\">\n" +
        "晚上："+ (arr4[i].num + 1) +"号被杀手杀死，"+ (arr4[i].num + 1) +"号是"+(arr4[i].name)+"<br>\n" +
        "白天："+ (arr7[i].num + 1) +"号被全民投票投死，" + (arr7[i].num + 1) +"号是"+ (arr7[i].name) +"\n" +
        "</div>"
    )}

    $(".again").click(function () {
        localStorage.clear();
        location.href = "edition.html"
    });
    $(".share").click(function () {
        localStorage.clear();
    })
});
$(document).ready(function () {
    $("#catch").text(killer.length - arr5.length);
    $("#day").text(arr7.length);
    $("#killer").text(killer.length);
    $("#man").text(civilian.length);
    $("#v1").text(v1);
    $("#v2").text(v2);
    if(arr5.length === arr6.length){
        $(".imgWord").text("杀手胜利");
    }else if (arr5.length === 0 ){
        $(".imgWord").text("平民胜利");
    }

});