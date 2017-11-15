

$(document).ready(function () {

   var fsm = new StateMachine({
       init:      'none',
       transitions:[
           {name:'kill',from:'none',to:'die'},
           {name:'lastWords',from:'die',to:'lastSpeak'},
           {name:'speak',from:'lastSpeak',to:'discuss'},
           {name:'vote',from:'discuss',to:'none '}
       ],
       methods:{
           onBeforeKill:function (lifecycle){                     //{name:'kill',from:'none',to:'die'},
               console.log("'kill',from:'none',to:'die'");
               console.log('a1 ' + fsm.state);
           },
           onLeaveNone:function (lifecycle) {
               console.log('a2 ' + fsm.state);
           },
           onEnterDie:function (lifecycle) {
               console.log('a3 ' + fsm.state)
           },
           onAfterKill:function (lifecycle) {
               console.log('a4 ' + fsm.state);
           },
///////////////////////////////////////////////////////////    {name:'lastWords',from:'die',to:'lastSpeak'},
           onBeforeLastWords:function (lifecycle) {
               console.log("'lastWords',from:'die',to:'lastSpeak'");
               console.log('b1 ' + fsm.state);
           },
           onLeaveDie:function (lifecycle) {
               console.log('b2 ' + fsm.state);
           },
           onEnterLastSpeak:function (lifecycle) {
               console.log('b3 ' + fsm.state);
           },
           onAfterLastWords:function(lifecycle){
               console.log('b4 ' + fsm.state);
           },
//////////////////////////////////////////////////////////////   {name:'speak',from:'lastSpeak',to:'discuss'},
           onBeforeSpeak:function (lifecycle) {
               console.log("'speak',from:'lastSpeak',to:'discuss'");
               console.log('c1 ' + fsm.state);
           },
           onLeaveLastSpeak:function (lifecycle) {
               console.log('c2 ' + fsm.state);
           },
           onEnterDiscuss:function (lifecycle) {
               console.log('c3 ' + fsm.state);
           },
           onAfterSpeak:function(lifecycle){
               console.log('c4 ' + fsm.state);
           },
//////////////////////////////////////////////////////////////    {name:'vote',from:'discuss',to:'results '}
           onBeforeVote:function () {
               console.log("'vote',from:'discuss',to:'results '");
               console.log('d1 ' + fsm.state);
           },
           onLeaveDiscuss:function () {
               console.log('d2 ' + fsm.state);
           },

           onEnterNone:function () {              //这一句是没有的（none）
               console.log('d3 ' + fsm.state);
           },

           onAfterVote:function () {
               console.log('d4 ' + fsm.state);
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