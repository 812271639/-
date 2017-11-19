//
//
//
//
var arr3 = JSON.parse(localStorage.getItem('arr3'));//保存杀人步骤死亡玩家的顺序，避免加载页面时从新清空保存在localStorage里的数组
var arr5 = JSON.parse(localStorage.getItem('arr5'));        // 保存在main.js页面
var arr6 = JSON.parse(localStorage.getItem('arr6'));        // 保存在main.js页面
var condition = JSON.parse(localStorage.getItem('condition'));      //用localStorage 以JSON 格式保存 数组
var arr4 = JSON.parse(localStorage.getItem('arr4'));        //用来保存被杀死玩家condition对象
var arr7 = JSON.parse(localStorage.getItem('arr7'));         //保存被投死玩家condition对象
var killer = JSON.parse(localStorage.getItem('killer'));         //保存被投死玩家condition对象
var civilian = JSON.parse(localStorage.getItem('civilian'));         //保存被投死玩家condition对象
var v1 = localStorage.getItem("v1");  //获取平民词组传过来的值
var v2 = localStorage.getItem("v2"); //获取杀手词组传过来的值
// var killer = localStorage.getItem("killer");  //获取平民词组传过来的值
// var civilian = localStorage.getItem("civilian"); //获取杀手词组传过来的值


console.log(arr4);
console.log(arr7);
console.log(arr7[0].num);
var i = 0;
var num1 = arr4[i].num + 1;
var num2 = arr7[i].num + 1;
var name1 = arr4[i].name;
var name2 = arr7[i].name;

$(document).ready(function () {
    for( i=0;i <arr4.length;i ++){
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
        "晚上："+ num1 +"号被杀手杀死，"+num1+"号是"+name1+"<br>\n" +
        "白天："+ num2 +"号被全民投票投死，" +num2+"号是"+name2+"\n" +
        "</div>"
    )}

    $(".again").click(function () {
        localStorage.clear();
        location.href = "edition.html"
    })
});
$(document).ready(function () {
    $("#catch").text(killer.length - arr5.length);
    $("#day").text(arr7.length);
    $("#killer").text(killer.length);
    $("#man").text(civilian.length);
    $("#v1").text(v1);
    $("#v2").text(v2);
});