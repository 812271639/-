//////////////////////////////////////////////////杀入页面//////////////////////////////////////////////////////
$(document).ready(function () {
    var none = localStorage.getItem('none');                              //开始状态
    var stateDie = localStorage.getItem('stateDie');                      //死亡状态
    var stateLast = localStorage.getItem('stateLast');                    //遗言状态
    var stateDiscuss = localStorage.getItem('stateDiscuss');              //讨论状态
    var stateNone = localStorage.getItem('stateNone');                    //当前状态
    var arr2 = JSON.parse(localStorage.getItem("user"));        //取出数组数据
    for (var i = 0; i < arr2.length; i++) {                     //生成玩家
        $(".player").append("<div class=\"identity-main\">\n" +
            "<div class=\"card\">\n" +
            "<div class=\"farmer\">"+ arr2[i] +"</div>\n" +
            "<div class=\"number\">" + (i + 1) + "号</div>\n" +
            "</div>\n" +
            "<div class=\"killKnife \"><img src=\"../picture/knife.png\"></div>\n" +
            "</div>");
    }

    if(stateDie === 'die' ){
        $('.gain').text('杀手杀人');
        $('.rowHide').show();
    }

    $('.card')
        .click(function () {
        $(this).next().css('opacity','1');  //点击现出图标
    });
    $('.identity-main').mouseleave(function () {    //移开鼠标隐藏图标
        $('.killKnife').css('opacity','0');
    });

    $('.killKnife')
        .click(function () {
            $(this).prev().css('background-color','#77623C').addClass('a');
            console.log($(this).prev());
            $(this).css('opacity','0');   //点击后隐藏图标
            if($('.a').hasClass('a') ){
                $('.a').off('click');
            }
            return false;    //防止返回执行第一个点击事件（事件冒泡）。
    });
















    $('#sureKill').click(function () {
        location.href = 'judge-diary.html';        //跳转回法官日记页面
    });
});