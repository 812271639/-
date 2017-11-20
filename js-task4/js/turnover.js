///////////////////////////////////////////////玩家翻牌页jQuery////////////////////////////////////////////////////////
$(document).ready(function () {
    var a = 1;
    $(".bottom_btn1").click(function () {
//      var image = document.querySelector(".image1");//原生js获取图片
//      var imageSrc = image.getAttribute("src"); //原生js获取图片属性
        var imageSrc = $("#image").attr('src');                  //获取图片属性保存在变量中
        var arr2 = JSON.parse(localStorage.getItem("user"));     //取出数据
        var v1 = localStorage.getItem("v1");  //获取平民词组传过来的值
        var v2 = localStorage.getItem("v2"); //获取杀手词组传过来的值
        // console.log(v1);
        // console.log(v2);
        var b = $("img").hasClass("image2");                     //hasClass()判断是否为true
        if (a <= arr2.length && b) {   //条件语句，a + +，用来取出数组元素,只有hasClass才执行加一
            a++;
        }
        if (a > arr2.length) {
            location.href = 'judge-seeing.html';                                     //跳转到法官页面
        }
        else if (imageSrc === "../picture/rever.png") {                                //判断图片路径(通过对比src属性判断)
            $("#image").attr("src", "../picture/front.png").addClass("image2");
            $(".role, .word_group, .remind").show();                              //显示元素
            $("#value").append(arr2[a - 1]);                                      //添加身份
            $(".bottom_btn1").text("隐藏并传递给" + (a + 1) + "号").addClass("bottom_btn2");//添加按钮样式

        } else {
            $("#image").attr("src", "../picture/rever.png").removeClass("image2");
            $(".role, .word_group, .remind").hide();                                 //隐藏元素
            $("#value").empty();                                                     //清空身份
            console.log(a);
            $(".number1").text(a);                                                   //添加改变数字
            $(".bottom_btn1").text("查看" + a + "号身份").removeClass("bottom_btn2"); //去除按钮样式
        }
        if (a === arr2.length && imageSrc === "../picture/rever.png") {
            $(".bottom_btn1").text('查看法官日志').addClass("bottom_btn3");            //添加按钮样式
        }
        var aaa = $("#value").text();
        if (aaa === "平民") {
            $(".word_group").text("词  组：" + v1);
        } else if (aaa === "杀手") {
            $(".word_group").text("词  组：" + v2);
        }
    });
});
$(document).ready(function () {
    $("#turnover").click(function () {
        location.href = 'player-ratio.html';
    })
});

