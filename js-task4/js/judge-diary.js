
$(document).ready(function () {
   var fsm = new StateMachine({
       init:      'none',
       transitions:[
           {name:'kill',from:'none',to:'die'},
           {name:'lastWords',from:'die',to:'lastSpeak'},
           {name:'speak',from:'lastSpeak',to:'discuss'},
           {name:'vote',from:'discuss',to:'none'}
       ],
       methods:{
           onAfterKill:function (lifecycle) {
               console.log('a、 ' + fsm.state);
               console.log(fsm.transitions());
               $('#kill').css('background-color','#18758D');
           },
           // onAfterLastWords:function(lifecycle){
           //     console.log('b、 ' + fsm.state);
           //     console.log(fsm.transitions());
           // // },
           // onLeaveLastSpeak:function (lifecycle) {
           //     console.log('*、 ' + fsm.state);
           //     console.log(fsm.transitions());
           // },
           onAfterSpeak:function(lifecycle){
               console.log('c、 ' + fsm.state);
               console.log(fsm.transitions());
           },
           onAfterVote:function () {
               console.log('d、 ' + fsm.state);
               console.log(fsm.transitions());
           }
       }
   });

    $('#kill').click(function () {
        fsm.kill();
    });
    $('#lastWords').click(function () {
        fsm.lastWords();
        console.log('$、 ' + fsm.state);
        // console.log(fsm.transitions());
        // if(fsm.can('lastWords') ){
        //     console.log('can、  true  ');
        // }else{
        //     console.log('can、 false');
        // }
        // if(fsm.cannot('lastWords') ){
        //     console.log('cannot、  true  ');
        // }else{
        //     console.log('cannot、 false');
        // }
        // if(fsm.is('lastSpeak') ){
        //     console.log('is、 true');
        // }else{
        //     console.log('is、 false');
        // }
    });
    $('#speak').click(function () {
        fsm.speak();
    });
    $('#vote').click(function () {
        fsm.vote();
    });
});