//
//
//
//
//
//
var arr3 = JSON.parse(localStorage.getItem('arr3'));
//arr3 保存在main.js页面。保存杀人步骤死亡玩家，避免加载页面时从新清空保存在localStorage里的数组
$(document).ready(function () {
    var fsm = new StateMachine({
        init:      'living',
        transitions:[
            {name:'start',from:'living',to:'died'},
            {name:'end',from:'died',to:'living'}
        ],
        methods:{
            onLeaveLiving:function () {
                console.log(fsm.state)
            },
            onAfterStart:function(){
               console.log(fsm.state)
           }
        }
    });
    var none = localStorage.getItem('none');                              //开始状态 （取出状态）
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

    if(stateDie === 'die' ){                      //投票页面和杀人页面的转换（改变文字）
        $('.gain').text('杀手杀人').addClass('a');  //添加class 用于后面判断杀手不能自杀
        $('.rowHide').show();
    }
    $('.card').click(function () {
        $(this).next().css('opacity','1');    //点击玩家现出小刀图标
    });
    $('.identity-main').mouseleave(function () {    //移开鼠标隐藏小刀图标
        $('.killKnife').css('opacity','0');
    });

    var condition = [];               //新建一个数组，保存玩家对象属性状态
    for(i=0;i<arr2.length;i++){
        condition[i]={                //给新建数组添加两个属性：名字 和 状态
            name:arr2[i],
            state:'living'
        }
    }
    localStorage.setItem('s',JSON.stringify(condition));      //用localStorage 以JSON 格式保存 数组
    var s =JSON.parse(localStorage.getItem('s'));             //取出保存的数组，用JSON 转换回数组形式

    $('.killKnife').click(function () {
        fsm.start();                                        //点击杀人触发有限状态机start事件
        var died = fsm.state;                               //声明变量保存当前状态 Died
        localStorage.setItem('died2',died);                 //保存死亡状态 Died
        fsm.end();                                          //让有限状态机返回初始状态living
        var position = $(this).parent().index();            //获取当前元素父元素的数组下标
        arr3.push(position);                                //将下标推送到一个新数组保存
        localStorage.setItem('arr3',JSON.stringify(arr3));  //用localStorage 以JSON 格式保存 数组arr3
        var player = s[arr3[position]].name;                //杀手不能杀死自己 s 为保存玩家属性的数组对象
        console.log(player);
        if( player === '杀手'&& ($('.gain').hasClass('a')) ){//杀手不能自杀
            alert('不能杀死自己')
        }else{
            $(this).prev().addClass('b');                     //添加一个class 改变颜色作为死亡状态
            $(this).css('opacity','0');                       //点击后隐藏图标
            // $('.card, .killKnife').off('click');           //点击一次后移除所有点击事件
            return false;                                     //防止返回执行第一个点击事件（事件冒泡）。
        }
    });
    var died2 = localStorage.getItem('died2');                //使用变量保存在localStorage中的死亡状态 Died
    if(died2 === 'died'){

        for(i=0;i<arr3.length;i++){
            $( $('.card')[arr3[i]])
                .addClass('b')      //如果玩家状态为 died 玩家改变玩家颜色
                .off('click')       //移除被杀玩家点击事件
        }
    }


    $('#sureKill').click(function () {
        location.href = 'judge-diary.html';        //跳转回法官日记页面

    });
});