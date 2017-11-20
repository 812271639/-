
//
//
//
//
var arr3 = JSON.parse(localStorage.getItem('arr3'));//保存杀人步骤死亡玩家，避免加载页面时从新清空保存在localStorage里的数组
var arr5 = JSON.parse(localStorage.getItem('arr5'));// 保存在main.js页面
var arr6 = JSON.parse(localStorage.getItem('arr6'));// 保存在main.js页面
var arr4 = JSON.parse(localStorage.getItem('arr4'));//被杀condition对象
var arr7 = JSON.parse(localStorage.getItem('arr7'));//被投死condition对象
var condition = JSON.parse(localStorage.getItem('condition')); //用localStorage 以JSON 格式保存 数组  保存在main.js页面
var stateDie = localStorage.getItem('stateDie');                      //死亡状态
$(document).ready(function () {
    var fsm = new StateMachine({
        init:      'living',
        transitions:[
            {name:'start',from:'living',to:'died'},
            {name:'end',from:'died',to:'living'},
            {name: 'goto', from: '*', to: function (a) {return a}}
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
        $('.gain').addClass('a');  //添加class 用于后面判断杀手不能自杀
    }
    $('.card').click(function () {
        $(this).next().css('opacity','1');    //点击玩家现出小刀图标
    });
    $('.identity-main').mouseleave(function () {    //移开鼠标隐藏小刀图标
        $('.killKnife').css('opacity','0');
    });



    $('.killKnife').click(function () {
        fsm.start();                                        //点击杀人触发有限状态机start事件
        var died = fsm.state;                               //声明变量保存当前状态 Died
        localStorage.setItem('died2',died);                 //保存死亡状态 Died
        var position = $(this).parent().index();            //获取当前元素父元素的数组下标
        arr3.push(position);                                //将下标推送到一个新数组保存
        localStorage.setItem('arr3',JSON.stringify(arr3));  //用localStorage 以JSON 格式保存 数组arr3
        condition[position].state = 'died';               //改变玩家生死状态
        condition[position].num = position;
        localStorage.setItem('condition',JSON.stringify(condition));    //保存数组
        $(this).prev().addClass('b');                     //添加一个class 改变颜色作为死亡状态
        $(this).css('opacity','0');                       //点击后隐藏图标
        $('.card, .killKnife').off('click');              //点击一次后移除所有点击事件
        $('.card').on("click",function () {
                alert("请不要重复投票")
            }
        );
        if(condition[position].name === "杀手"){
            arr5.pop();                                   //保存杀手的数组长度，用于判断游戏结束
            localStorage.setItem('arr5',JSON.stringify(arr5));
        }else if(condition[position].name === "平民"){
            arr6.pop();                                    //保存平民的数组长度，用于判断游戏结束
            localStorage.setItem('arr6',JSON.stringify(arr6));
        }
        arr7.push(condition[position]);  //arr7 用来保存被投死玩家
        localStorage.setItem('arr7',JSON.stringify(arr7));  //用localStorage 以JSON 格式保存 数组arr7
        var q= "q";
        localStorage.setItem('q',q); //用于刷新后不能再杀人
            return false;                                     //防止返回执行第一个点击事件（事件冒泡）。
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
    var q = localStorage.getItem('q');   //用于刷新后不能再杀人
    if(q === 'q'){
        $('.card') .off('click').next().off('click');
        $('.card').on("click",function () {
                alert("请不要重复投票")
            }

        );

        fsm.goto('died');
    }

    $('#sureVote').click(function () {
        localStorage.removeItem("q");
        arr5 = JSON.parse(localStorage.getItem('arr5'));        // 保存在main.js页面
        arr6 = JSON.parse(localStorage.getItem('arr6'));        // 保存在main.js页面
        console.log(arr5.length);
        console.log(arr6.length);
        if((arr5.length === 0)  || (arr5.length >= arr6.length)){

            location.href = 'result.html';             //当杀手为0，或者杀手等于平民时，结束游戏
        }else if(fsm.can('end')  ){
            location.href = 'judge-diary.html';        //如果事件end的能被触发，跳转回游戏步骤页面
        }else{
            alert('请选择玩家进行投票')
        }
    });

});