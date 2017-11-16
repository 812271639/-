

$(document).ready(function () {

   var fsm = new StateMachine({
       init:      'none',
       transitions:[
           {name:'kill',from:'none',to:'die'},
           {name:'lastWords',from:'die',to:'lastSpeak'},
           {name:'speak',from:'lastSpeak',to:'discuss'},
           {name:'vote',from:'discuss',to:'none'},
           {name: 'goto', from: '*', to: function (a) {return a}}
       ],
       methods:{
           onAfterKill:function (lifecycle) {                             //杀人事件后
               console.log('状态、 ' + fsm.state);
               // console.log('事件、'+fsm.transitions()[0]);
               var stateDie = fsm.state;                                  //声明变量
               localStorage.setItem('stateDie',stateDie);                 //保存状态 Die

                   $('#kill').css('background-color','#18758D');
                   $('#killTriangle').addClass('left_triangle2');

                   location.href = 'kill.html';                             //跳转到杀人页面
           },
           // onLeaveDie:function (lifecycle) {                            //离开die状态
           // },
           onEnterLastSpeak:function (lifecycle) {                         //进入LastSpeak状态
               // console.log('onEnterLastSpeak状态、 ' + fsm.state);

           },
           onAfterLastWords:function(lifecycle){                           //发表遗言事件后
               // console.log('onAfterLastWords状态、 ' + fsm.state);
               var stateLast = fsm.state;                                  //声明变量
               localStorage.setItem('stateLast',stateLast );               //保存状态 LastSpeak
               },
           onAfterSpeak:function(lifecycle){                                //讨论事件后
               // console.log('onAfterSpeakc状态、 ' + fsm.state);
               var stateDiscuss = fsm.state;                                //声明变量
               localStorage.setItem('stateDiscuss',stateDiscuss );          //保存状态 Discuss
           },
           onAfterVote:function () {                                        //投票事件后
               // $('#vote').css('background-color','#18758D');
               // console.log('onAfterVote状态、 ' + fsm.state);
               var stateNone = fsm.state;                                    //声明变量
               localStorage.setItem('stateNone',stateNone  );                //保存状态 None
               location.href = 'Kill.html';                                  //跳转到投票
               localStorage.removeItem('stateDie');                          //清除 stateDie 状态的数据，回到第二天
           }
       }
   });

    $('#kill').click(function () {
        fsm.kill();                                         //触发AfterKill事件
        console.log(fsm.state);

    });
    $('#lastWords').click(function () {
        fsm.goto('die');
        console.log(fsm.state);
        if((fsm.state === 'die') || (fsm.state === 'lastSpeak' ) ||  (fsm.state === 'discuss' ) ){
              false;
        }else {
            alert('小姐姐杀人了' +fsm.state);
        }
        fsm.lastWords();                                      //触发AfterLsatWords事件
        if(fsm.state === 'lastSpeak' ){
            alert('请死者表明身份并发表遗言');
            $('#lastWords').css('background-color','#18758D');
            $('#lastTriangle').addClass('left_triangle2');
        }
    });
    $('#speak').click(function () {
        console.log(fsm.state);
        if((fsm.state === 'lastSpeak') || (fsm.state === 'discuss' ) ){
              false;
        }else {

            alert('小姐姐杀人了' +fsm.state);
        }
        fsm.speak();                                              //触发AfterSpeak事件
        if(fsm.state === 'discuss' ){
            alert('请玩家发言讨论');
            $('#speak').css('background-color','#18758D');
            $('#speakTriangle').addClass('left_triangle2');
        }
        console.log('状态、 ' + fsm.state);
        console.log('事件、'+fsm.transitions()[0]);
    });
    $('#vote').click(function () {
        console.log(fsm.state);
        if(fsm.state === 'none'){
            alert('小姐姐杀人了' +fsm.state);
        }
        fsm.vote();                                                  //触发AfterVote事件
        $('#kill').css('background-color',' #29bde0');
        $('#killTriangle').removeClass('left_triangle2');
        $('#lastWords').css('background-color',' #29bde0');
        $('#lastTriangle').removeClass('left_triangle2');
        $('#speak').css('background-color',' #29bde0');
        $('#speakTriangle').removeClass('left_triangle2');
        console.log('状态、 ' + fsm.state);
        console.log('事件、'+fsm.transitions()[0]);
    });

    var none = localStorage.getItem('none');                              //开始状态
    var stateDie = localStorage.getItem('stateDie');                      //死亡状态
    var stateLast = localStorage.getItem('stateLast');                    //遗言状态
    var stateDiscuss = localStorage.getItem('stateDiscuss');              //讨论状态
    var stateNone = localStorage.getItem('stateNone');                    //当前状态
    if(stateDie === 'die'){
        $('#kill').css('background-color','#18758D');
        $('#killTriangle').addClass('left_triangle2');
    }

$('#to-judge-seeing').click(function () {
    location.href = 'judge-seeing.html';                                   //跳转页面
});
    $('#toJudgeSeeing').click(function () {
        location.href = 'judge-seeing.html';
    });
});
