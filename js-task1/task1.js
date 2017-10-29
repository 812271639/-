






//这个函数选择三个格子执行
function start() {
    var change = document.getElementsByClassName('content');//在每次定时开始前回复初始状态
    for (var b = 0; b < 9; b++) {
        change[b].style.background = "#fea500";
    }
    var arr = new Array(9);
    for (var i=0; i<9; i++) {
        arr[i] = i;
    }
    var arr2 = new Array();
    for (var i=9; i>0; i--) {
        var rnd = Math.floor(Math.random()*i);
        arr2.push(arr[rnd]);
        arr.splice(rnd,1);
    }
    change[arr2[0]].style.background = colors();
     change[arr2[1]].style.background = colors();
    change[arr2[2]].style.background = colors();
}
//生成随机颜色
function colors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    if(r !== g && g !== b && r !== b){
        return "rgb(" + r + ',' + g + ',' + b + " )";
    }
}


var mytime;                                  //放在函数里不起作用？
function myFunction() {
    clearInterval( mytime);                  //清除定时
    mytime = setInterval(start, 1500);       //连续执行定时
    // setInterval('start()', 1000);
    // setInterval(function(){ start() }, 1000);

}
//结束定时
function end() {
    clearInterval(mytime);                     //清除定时
    var color = document.getElementsByClassName('content');
    var i;
    for (i = 0; i < color.length; i++) {
        color[i].style.background = '';
    }

}

//选择三个不同的随机数。如果都不相同则break跳出循环，执行函数。如果相同，则继续执行循环
// while(true) {
//     var z = Math.floor(Math.random() * 9);
//     var y = Math.floor(Math.random() * 9);
//     var x = Math.floor(Math.random() * 9);
//     if(z !== y && z !== x && x !== y) {
//         break;
//     }
// }
//     change[z].style.background = colors();
//     change[y].style.background = colors();
//     change[x].style.background = colors();



// function start() {
//     var change = document.getElementsByClassName('content');
//     for (var b = 0; b < 9; b++) {
//         change[b].style.background = "#9bcf5f";
//     }
//     for (var i = 0; i < 3; i++) {
//         change[hello(8)].style.background = colors() ;
//     }
// }


//
// function shuffle_pick_1(m)
// {
//     var arr = new Array(m);
//     for (var i=0; i<m; i++) {
//         arr[i] = i;
//     }
//     var arr2 = new Array();
//     for (var i=m; i>0; i--) {
//         var rnd = Math.floor(Math.random()*i);
//         arr2.push(arr[rnd]);
//         arr.splice(rnd,1);
//     }
//     return arr2[i];
// }
//

