

$(document).ready(function () {

   var fsm = new StateMachine({
       init:      'none',
       transitions:[
           {name:'kill',from:'none',to:'die'},
           {name:'lastWords',from:'die',to:'lastSpeak'},
           {name:'speak',from:'lastSpeak',to:'discuss'},
           {name:'vote',from:'discuss',to:'results '}
       ],
       methods:{
           onBeforeKill:function (lifecycle){                     //{name:'kill',from:'none',to:'die'},
               console.log('1111');
           },
           onLeaveNone:function (lifecycle) {
               console.log('1111');
           },
           onEnterDie:function (lifecycle) {
               console.log('1111')
           },
           onAfterKill:function (lifecycle) {
               console.log('1111');

           },
///////////////////////////////////////////////////////////    {name:'lastWords',from:'die',to:'lastSpeak'},
           onBeforeLastWords:function (lifecycle) {
               console.log(2222);

           },
           onLeaveDie:function (lifecycle) {
               console.log(2222);
           },
           onEnterLastSpeak:function (lifecycle) {
               console.log(2222);
           },
           onAfterLastWords:function(lifecycle){
               console.log(2222);

           },
//////////////////////////////////////////////////////////////   {name:'speak',from:'lastSpeak',to:'discuss'},
           onBeforeSpeak:function (lifecycle) {
               console.log(3333);
           },
           onLeaveLastSpeak:function (lifecycle) {
               console.log(3333);
           },
           onEnterDiscuss:function (lifecycle) {
               console.log(3333);
           },
           onAfterSpeak:function(lifecycle){
               console.log(3333);
           },
//////////////////////////////////////////////////////////////    {name:'vote',from:'discuss',to:'results '}
           onBeforeVote:function () {
               console.log(4441);
           },
           onLeaveDiscuss:function () {
               console.log(4442);
           },

           onEnterResults:function () {              //这一句是没有的（none）
               console.log(4443);
           },

           onAfterVote:function () {
               console.log(4444);
           }
       }
   });

    $('#kill').click(function () {
        fsm.kill();
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

});