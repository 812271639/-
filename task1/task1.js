







function start() {
    var change = document.getElementsByClassName('content');
    for (var b = 0; b < 9; b++) {
        change[b].style.background = "white";
    }
    while(true) {
        var z = Math.floor(Math.random(9) * 9);
        var y = Math.floor(Math.random(9) * 9);
        var x = Math.floor(Math.random(9) * 9);
        if(z !== y && z !== x && x !== y) {
            break;
        }
    }
    change[z].style.background = colors();
    change[y].style.background = colors();
    change[x].style.background = colors();
}


//
// function start() {
//     var change = document.getElementsByClassName('content');
//     for (var b = 0; b < 9; b++) {
//         change[b].style.background = "#9bcf5f";
//     }
//
//     for (var i = 0; i < 3; i++) {
//
//     }
// }

function colors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + " )";
}


var mytime;    //放在函数里不起作用？
function myFunction() {
    clearInterval( mytime);
    mytime = setInterval(start, 1000);
    // setInterval('start()', 1000);
    // setInterval(function(){ start() }, 1000);

}

function end() {
    clearInterval(mytime);
    var color = document.getElementsByClassName('content');
    var i;
    for (i = 0; i < color.length; i++) {
        color[i].style.background = '';
    }

}


