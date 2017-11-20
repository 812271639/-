//
//
//
//
//
//
var arr3 = JSON.parse(localStorage.getItem('arr3'));
//arr3 保存在main.js页面。保存杀人步骤死亡玩家，避免加载页面时从新清空保存在localStorage里的数组
var arr5 = JSON.parse(localStorage.getItem('arr5'));        // 保存在main.js页面
var arr6 = JSON.parse(localStorage.getItem('arr6'));        // 保存在main.js页面
var arr4 = JSON.parse(localStorage.getItem('arr4'));        //用来保存被杀死玩家condition对象
var arr7 = JSON.parse(localStorage.getItem('arr7'));         //保存被投死玩家condition对象
var condition = JSON.parse(localStorage.getItem('condition'));      //用localStorage 以JSON 格式保存 数组
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
               console.log(fsm.state);

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

    $('.card').click(function () {
        $(this).next().css('opacity','1');    //点击玩家现出小刀图标
    });
    $('.identity-main').mouseleave(function () {    //移开鼠标隐藏小刀图标
        $('.killKnife').css('opacity','0');
    });

    $('.killKnife').click(function () {
        var position = $(this).parent().index();            //获取当前元素父元素的数组下标
        var player = condition[position].name;                //杀手不能杀死自己 condition 为保存玩家属性的数组对象
        console.log(player);
        if( player === '杀手' ){                              //杀手不能自杀
            alert('不能杀死自己');
            fsm.end();                                          //点击杀手后触发事件 end 让页面不能跳转
        }else{
            fsm.start();                                      //点击水民触发start事件，事件end可以触发，页面就可以跳转
            var died = fsm.state;                               //声明变量保存当前状态 Died
            localStorage.setItem('died2',died);                 //保存死亡状态 Died
            arr3.push(position );                                //将下标推送到一个新数组保存
            localStorage.setItem('arr3',JSON.stringify(arr3));  //用localStorage 以JSON 格式保存 数组arr3
            condition[position].state = 'died';                  //改变玩家生死状态
            condition[position].num = position;
            localStorage.setItem('condition',JSON.stringify(condition));    //保存数组对象
            arr6.pop();
            localStorage.setItem('arr6',JSON.stringify(arr6));//保存删除后的数组长度，用于判断游戏结束
            arr4.push(condition[position]);                   //arr4 用来保存被杀死玩家
            localStorage.setItem('arr4',JSON.stringify(arr4));

            $(this).prev().addClass('b');                     //添加一个class 改变颜色作为死亡状态
            $(this).css('opacity','0');                       //点击后隐藏图标
            $('.card, .killKnife').off('click');              //点击一次后移除所有点击事件

            return false;                                     //防止返回执行第一个点击事件（事件冒泡）。
        }
    });
    var died2 = localStorage.getItem('died2');                //使用变量保存在localStorage中的死亡状态 Died
    if(died2 === 'died'){
        for(i=0;i<arr3.length;i++){
            $( $('.card')[arr3[i]])
                .addClass('b')      //如果玩家状态为 died 玩家改变玩家颜色
                .off('click')       //移除被杀玩家点击事件
                .next().off('click')
        }
    }

    $('#sureKill').click(function () {
        arr6 = JSON.parse(localStorage.getItem('arr6'));
        arr5 = JSON.parse(localStorage.getItem('arr5'));
        console.log(arr5.length);
        console.log(arr6.length);
        if( (arr5.length === 0)  || (arr5.length >= arr6.length) ){   //当杀手为0，或者杀手等于平民时，结束游戏
            location.href = 'result.html';
        }else if(fsm.can('end')  ){
            location.href = 'judge-diary.html';        //如果事件end的能被触发，跳转回法官日记页面,用于没有选择杀死玩家弹出警告
        }else{
            alert('请选择玩家')
        }
    });
});