//获取 input 值
var valueNumber = document.getElementById("player_amount");//获取输入框值
var number_slid = document.getElementById("number_slid");    //获取进度条值

//验证数字
function get_value() {
    var num = valueNumber.value;
    if (isNaN(num) || num < 6 || num > 18) {
        alert("请输入6-18的数字");
    }
}

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
    if (number_slid.value >= 18) {
        return false;
    } else {
        ++ number_slid.value;
        ++ valueNumber.value;
    }
}

//点击进度条减
function number_reduce() {
    var number_slid = document.getElementById("number_slid");
    var valueNumber = document.getElementById("player_amount");
    if (number_slid.value < 1) {
        return false;
    } else {
        -- number_slid.value;
        -- valueNumber.value;
    }
}

function setPlayer() {
    var num = valueNumber.value;
    var ul = document.getElementById("player");
    ul.innerHTML = "";                            //清空数组,避免从复生成
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
}

document.getElementById("setPlayer").onclick = function () {
    var num = valueNumber.value;
    if (isNaN(num) || num < 6 || num > 18) {
        alert("请输入6-18的数字");
    } else {
        setPlayer()
    }

};

