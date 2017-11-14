///////////////////////////打印 单数 双数
// var add =(function(){
//     var counter = 0;
//     return function (){
//         return counter +=1;
//     }
// })();
// function hello() {
//     console.log(add());
//     document.getElementById("text").innerHTML=add();
// }
///////////////////////////////////////////////////////////functio
// function say(value){
//     console.log(value.name);
// }
// function hello(someFunction){
//     var abc = {
//         name:"小姐姐"
//     };
//     someFunction(abc);
// }
// hello(say);

var fsm = new StateMachine({
    init: 'solid',
    transitions: [
        {name: 'melt', from: 'solid', to: 'liquid1'},
        {name: 'vaporize', from: 'liquid1', to: 'gas'},
        {name: 'condense', from: 'gas', to: 'liquid'},
        {name: 'freeze', from: 'liquid', to: 'solid'}
    ],

    methods: {
        onBeforeMelt: function () {        //name: 'melt', from: 'solid', to: 'liquid'
            console.log('在融化前111')
        },
        onLeaveSolid: function () {
            console.log('离开固体时111')
        },
        onEnterLiquid1: function () {
            console.log('进入液体时111')
        },
        onAfterMelt: function () {
            console.log('在融化后111')
        },



        onBeforeVaporize: function () {    //name: 'vaporize', from: 'liquid', to: 'gas'
            console.log('在蒸发前222')
        },
        onLeaveLiquid1: function () {
            console.log('离开液体时222')
        },
        onEnterGas: function () {
            console.log('进入气体时222')
        },
        onAfterVaporize: function () {
            console.log('在蒸发后222')
        },


        onBeforeCondense: function () {     //name: 'condense', from: 'gas', to: 'liquid'
            console.log('在凝结前333')
        },
        onLeaveGas: function () {
            console.log('离开气体时333')
        },
        onEnterLiquid: function () {
            console.log('进入液体时333')
        },
        onAfterCondense: function () {
            console.log('在蒸发后333')
        },



        onBeforeFreeze: function () {   //name: 'freeze', from: 'liquid', to: 'solid'
            console.log('在冻结前444')
        },
        onLeaveLiquid: function () {
            console.log('离开液体时444')
        },
        onEnterSolid: function () {
            console.log('进入固体时444')
        },
        onAfterFreeze: function () {
            console.log('在冻结后444')
        }





    }
});
// fsm.state;
// fsm.melt();
// fsm.freeze();
// fsm.vaporize();
// fsm.condense();
// //
// onMelt();
// onFreeze();
// onVaporize();
// onCondense();
