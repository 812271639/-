// $(document).ready(function () {
//     var a = 1;
//     $(".bottom_btn1").click(function () {
// //            var image = document.querySelector(".image1");//原生js获取图片
// //            var imageSrc = image.getAttribute("src"); //原生js获取图片属性
//         var imageSrc = $("#image").attr('src');                  //获取图片属性保存在变量中
//         var arr2 = JSON.parse(localStorage.getItem("user"));     //取出数据
//         var b = $("img").hasClass("image2");                     //hassClass()判断是否为true
//         if (a <= arr2.length && b) {
//             a++;
//         }
//         if (imageSrc === "../picture/rever.png") {                                //判断图片路径(通过对比src属性判断)
//             $("#image").attr("src", "../picture/front.png").addClass("image2");
//             $(".role, .word_group, .remind").show();                              //显示元素
//             $("#value").append(arr2[a - 1]);                                      //添加身份
//             $(".bottom_btn1").text("隐藏并传递给" + (a + 1) + "号").addClass("bottom_btn2");//添加按钮样式
//         } else {
//             $("#image").attr("src", "../picture/rever.png").removeClass("image2");
//             $(".role, .word_group, .remind").hide();                                 //隐藏元素
//             $("#value").empty();                                                     //清空身份
//             $(".number1").text(a);                                                   //添加改变数字
//             $(".bottom_btn1").text("查看" + a + "号身份").removeClass("bottom_btn2"); //去除按钮样式
//         }
//         if (a === arr2.length && imageSrc === "../picture/rever.png") {
//             $(".bottom_btn1").text('查看法官日志').addClass("bottom_btn3");            //添加按钮样式
//         }
//         else if (a > arr2.length) {
//             location.href = 'judge-seeing.html';
//         }
//     });
// });
// $(document).ready(function () {
//     $("#turnover").click(function () {
//         location.href = 'player-ratio.html';
//     })
// });
//
//
// //法官日志页js
//
// $(document).ready(function () {
//     var arr2 = JSON.parse(localStorage.getItem("user"));     //取出数据
// //        var abc="<div class=\"card\"><div class=\"farmer\">医生</div><div class=\"number\">1号</div></div>";
//     for(var i=0;i < arr2.length;i++){
//         $(".identity").append("<div class=\"card\">\n" + "<div class=\"farmer\">"+arr2[i] +"</div>\n" + "<div class=\"number\">"+ (i+1) +"号</div>\n" + "</div>");
//
//     }
//
// });
// $(document).ready(function () {
//     $("#judge-seeing").click(function () {
//         location.href = 'player-ratio.html';
//     })
// });
//



