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
        var b = $("img").hasClass("image2");                     //hassClass()判断是否为true
        if (a <= arr2.length && b) {                             //条件语句，a + 1，用来取出数组元素
            a++;
        }
        if (imageSrc === "../picture/rever.png") {                                //判断图片路径(通过对比src属性判断)
            $("#image").attr("src", "../picture/front.png").addClass("image2");
            $(".role, .word_group, .remind").show();                              //显示元素
            $("#value").append(arr2[a - 1]);                                      //添加身份
            $(".bottom_btn1").text("隐藏并传递给" + (a + 1) + "号").addClass("bottom_btn2");//添加按钮样式

        } else {
            $("#image").attr("src", "../picture/rever.png").removeClass("image2");
            $(".role, .word_group, .remind").hide();                                 //隐藏元素
            $("#value").empty();                                                     //清空身份
            $(".number1").text(a);                                                   //添加改变数字
            $(".bottom_btn1").text("查看" + a + "号身份").removeClass("bottom_btn2"); //去除按钮样式
        }
        if (a === arr2.length && imageSrc === "../picture/rever.png") {
            $(".bottom_btn1").text('查看法官日志').addClass("bottom_btn3");            //添加按钮样式
        } else if (a > arr2.length) {
            location.href = 'judge-seeing.html';                                     //跳转到法官页面
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


/////////////////////////////////////////////////////玩家配比页面原生js/////////////////////////////////////////////////

//获取 input 值
var valueNumber = document.getElementById("player_amount");  //选择数字输入框
var number_slid = document.getElementById("number_slid");    //选择进度条

// var num = valueNumber.value;
document.getElementById("setPlayer").onclick = function () {
    var num = valueNumber.value;
    if (isNaN(num) || num < 6 || num > 18 || (num%1 !== 0)) {
        alert("请输入6-18的数字");                      //设置按钮验证数字
    } else {
        setPlayer()
    }
};
document.getElementsByClassName("bottom_btn")[0].onclick = function () {
    var li = document.getElementsByTagName("li");
    var num = valueNumber.value;
    var write1 = document.getElementById("write1").value;       //选择水民词组输入框
    var write2 = document.getElementById("write2").value;       //选择杀手词组输入框
    localStorage.setItem("v1", write1);                         //存值水民词组
    localStorage.setItem("v2", write2);                         //存值杀手词组
    // console.log(write1);
    // console.log(write2);
    var hello = document.getElementById("player").innerHTML;
    if (isNaN(num) || num < 6 || num > 18) {
        alert("请输入6-18的数字");                                     //验证数字
    } else if (hello == false || num != li.length ) {     //使用 布尔值 判断 是否有内容
        alert("请点击设置玩家数量");
    } else {
        location.href = 'turnover.html';//跳转
    }
    // var hello = document.getElementById("player").innerHTML;
    // if (isNaN(num) || num < 6 || num > 18) {
    //     alert("请输入6-18的数字");                                     //验证数字
    // } else if(hello === "" ){     // 使用空引号 “ ” 判断 是否有内容
    //     alert("请设置玩家数量");
    // }else {
    //     location.href = 'turnover.html';//跳转
    // }
};

//进度条关联输入框
function range() {
    valueNumber.value = number_slid.value;//当进度条变时，赋值给输入框
}

function text() {
    number_slid.value = valueNumber.value;//当输入框变时，赋值给进度条
}

//点击进度条加
function number_add() {

    var number_slid = document.getElementById("number_slid");
    var valueNumber = document.getElementById("player_amount");
    var num = valueNumber.value;
    if (number_slid.value >= 18 || num >=18 || num<0 || (num%1 !== 0)) {
        alert("请输入6-18的数字");
        return false;
    } else {
        ++number_slid.value;
        ++valueNumber.value;
    }
}

//点击进度条减
function number_reduce() {
    var number_slid = document.getElementById("number_slid");
    var valueNumber = document.getElementById("player_amount");
    var num = valueNumber.value;
    if (number_slid.value < 7 || (num%1 !== 0) || num<0 ) {
        alert("请输入6-18的数字");
        return false;
    } else {
        --number_slid.value;
        --valueNumber.value;
    }
}

//生成玩家
function setPlayer() {
    var num = valueNumber.value;
    var ul = document.getElementById("player");             //清空数组,避免从复生成
    document.getElementById("player").innerHTML = "";
    var arr2 = [];
    var killer = [];
    var civilian = [];
    //判断玩家数量
    if (6 <= num && num <= 9) {
        for (i = 0; i < 2; i++) {
            killer[i] = "杀手";
        }
        for (i = 0; i < (num - 2); i++) {
            civilian[i] = "平民";
        }
    } else if (10 <= num && num <= 13) {
        for (i = 0; i < 3; i++) {
            killer[i] = "杀手";
        }
        for (i = 0; i < (num - 3); i++) {
            civilian[i] = "平民";
        }
    } else if (14 <= num && num <= 16) {
        for (i = 0; i < 4; i++) {
            killer[i] = "杀手";
        }
        for (i = 0; i < (num - 4); i++) {
            civilian[i] = "平民";
        }
    } else if (17 <= num && num <= 18) {
        for (i = 0; i < 5; i++) {
            killer[i] = "杀手";
        }
        for (i = 0; i < (num - 5); i++) {
            civilian[i] = "平民";
        }
    }
    var arr = killer.concat(civilian);                 //合并数组

    for (var i = num; i > 0; i--) {                    //随机数组
        var rnd = Math.floor(Math.random() * i);
        arr2.push(arr[rnd]);
        arr.splice(rnd, 1);
    }

    for (i > 0; i <= arr2.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var player1 = document.createTextNode(" 水    民  1 人");
        var player2 = document.createTextNode(" 杀    手  1 人");
        if (arr2[i] === "杀手") {
            span.appendChild(player2);
            li.appendChild(span);
            ul.appendChild(li);
            ul.style.color = "#fea500";
        } else if (arr2[i] === "平民") {
            span.appendChild(player1);
            li.appendChild(span);
            ul.appendChild(li);
            li.style.color = "#29bde0";
        }
    }
    localStorage.setItem('killer',JSON.stringify(killer));//保存杀手
    localStorage.setItem('civilian',JSON.stringify(civilian));//保存平民
    localStorage.setItem("user", JSON.stringify(arr2));   //存值
    var condition = [];               //新建一个数组，保存玩家对象属性状态
    for(i=0;i<arr2.length;i++){
        condition[i]={                //给新建数组添加两个属性：名字 和 状态
            name:arr2[i],
            state:'living',
            num:""
        }
    }
    localStorage.setItem('condition',JSON.stringify(condition));      //用localStorage 以JSON 格式保存 数组
    var arr3 = [];
    localStorage.setItem('arr3',JSON.stringify(arr3));
    //新建一个数组为后面的杀人步骤保存死亡玩家，避免加载页面时从新清空保存在localStorage里的数组

    var arr5 = [];
    var arr6 = [];
    for (var i=0;i<arr2.length;i++){
        if(arr2[i]==="杀手"){
            arr5.push(arr2[i])
        }else if(arr2[i]==="平民"){
            arr6.push(arr2[i])
        }
    }
    localStorage.setItem('arr5',JSON.stringify(arr5));
    localStorage.setItem('arr6',JSON.stringify(arr6)); //arr5 arr6保存玩家数量，用于判断游戏结束
    var arr4 = [];
    localStorage.setItem('arr4',JSON.stringify(arr4));//用来保存被杀死玩家
    var arr7 = [];
    localStorage.setItem('arr7',JSON.stringify(arr7)); //用来保存被投死玩家

}








































































































