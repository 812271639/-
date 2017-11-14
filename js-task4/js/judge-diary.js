

$(document).ready(function () {
    //
    // var first_day_id = document.getElementById('first_day_id'),
    //     kill   = document.getElementById('kill'),
    //     lastWords = document.getElementById('lastWords'),
    //     speak   = document.getElementById('speak'),
    //     vote   = document.getElementById('vote');

   var fsm = new StateMachine({
       init:        'ready',
       transitions:[
           // { name: 'start',from: 'none',to: 'die'},
           {name:'kill',from:'die',to:'lastSpeak'},
           {name:'lastWords',from:'lastSpeak',to:'discuss'},
           {name:'speak',from:'discuss',to:'results'},
           {name:'vote',from:'results',to:'none'}
       ],
       methods:{
           onAfterTransition:function (lifecycle) {
               $('#kill').css('background-color','blue');
               // $('#lastWords').off('click',function () {
               //     $(this).css('background-color','yellow');
               // });
           },
           onBeforeKill:function (lifecycle){
               console.log('transition: ' + lifecycle.transition);
               console.log('from: '       + lifecycle.from);
               console.log('to: '         + lifecycle.to);
               // console.log(zzzzs);
               // $('#lastWords').click(alert('请先杀人'));
               // $('#speak').click(alert('请先杀人'));
               // $('#vote').click(alert('请先杀人'));
           },
           onleavedie:function (lifecycle) {

           },
           onenterlastSpeak:function (lifecycle) {

           },
           onAfterkill:function (lifecycle) {
               console.log(12345);
               $('#kill').css('background-color','yellow').off('click');
               $('#lastWords').alert('请死者亮明身份并发言');
           },
           onBeforelastWord:function (lifecycle) {
               $('#speak').click(alert('请死者亮明身份并发言'));
               $('#vote').click(alert('请死者亮明身份并发言'));
           },
           onleavelastSpeak:function (lifecycle) {

           },
           onenterdiscuss:function (lifecycle) {

           },
           onAfterlastWord:function(lifecycle){
               $('#lastWords').css('background-color','yellow');
               $('#speak').click(alert('开始讨论'));
               $('#vote').click(alert('请先开始讨论'));
           },
           onBeforespeak:function (lifecycle) {

           },
           onleavediscuss:function (lifecycle) {

           },
           onenterresults:function (lifecycle) {

           },
           onAfterspeak:function(lifecycle){
               $('#speak').css('background-color','yellow');
           }
       }
   });

    $('#kill').click(function () {
        // console.log(232323);
        fsm.kill();
        // console.log(fsm.kill);
        // $(this).css('color','red');
    });
    $('#lastWords').click(function () {
        fsm.lastWords();
        // $(this).css('background-color','blue');
    });
    $('#speak').click(function () {
        fsm.speak();
        // $('#speak').css('background-color','blue');
    });
    $('#vote').click(function () {
        fsm.vote();
    });
    // fsm.state;
    fsm.start();
    fsm.kill();
    return fsm;
});