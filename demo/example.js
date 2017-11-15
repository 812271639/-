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
    init: 'none',
    transitions: [
        {name:'start' , from:'none',to:'A'},
        {name: 'Melt', from: 'A', to: 'B'},
        {name: 'Vaporize', from: 'B', to: 'C'},
        {name: 'Condense', from: 'C', to: 'D'},
        {name: 'Freeze', from: 'D', to: 'A'},
        {name:'clear',from:'A',to:'none'}
        //{name: 'goto', from: '*', to: function (a) {return a}} //q 可以是任何字符,数字不可以
    ],
    // data: {
    //     color: 'red',
    //     girl: '小姐姐'
    // },
    methods: {

        // hello:function () {
        //     console.log('另一个小姐姐')
        // },
        // onMelt:     function() { console.log(' melted to ' + fsm.state);  },
        // onVaporize: function() { console.log(' vaporized to ' + fsm.state) },
        // onCondense: function() { console.log(' condensed to ' + fsm.state) },
        // onFreeze:   function() { console.log(' froze to ' + fsm.state)     }
        //
        onBeforeMelt: function (lifecycle, arg1, arg2) {
            console.log("name: 'melt', from: 'A', to: 'B'");
            // console.log('事件： ' + lifecycle.transition);
            // console.log('离开 ' + lifecycle.from + '状态');
            // console.log('进入 ' + lifecycle.to + '状态');
            // console.log(arg1);
            // console.log(arg2);
            console.log('a1 在事件 melt 前,当前状态 ' + fsm.state);

        },
        onLeaveA: function () {
            console.log('a2执行事件melt，离开 A 状态,当前状态 ' + fsm.state);
        },
        onEnterB: function () {
            console.log('a3执行事件melt，进入 B 状态,当前状态 ' + fsm.state);
        },
        onAfterMelt: function () {
            console.log('a4在事件 melt 后,当前状态 ' + fsm.state);
            console.log();
        },
        onBeforeVaporize: function () {
            console.log("name: 'vaporize', from: 'B', to: 'C'");

            console.log('b1在事件Vaporize前,当前状态 ' + fsm.state);
        },
        onLeaveB: function () {

            console.log('b2执行事件Vaporize，离开B，当前状态 ' + fsm.state);
        },
        onEnterC: function () {
            console.log('b3执行事件Vaporize，进入C，当前状态 ' + fsm.state);
        },
        onAfterVaporize: function () {
            console.log('b4在事件Vaporize后，当前状态 ' + fsm.state);
        },
        onBeforeCondense: function () {
            console.log("name: 'condense', from: 'C', to: 'D'");
            console.log('c1在事件Condense前，当前状态 ' + fsm.state);
        },
        onLeaveC: function () {
            console.log('c2执行事件Condense，离开C，当前状态 ' + fsm.state);
        },
        onEnterD: function () {
            console.log('c3执行事件Condense，进入D，当前状态 ' + fsm.state);
        },
        onAfterCondense: function () {
            console.log('c4在事件Condense后，当前状态 ' + fsm.state);
        },
        onBeforeFreeze: function () {
            console.log("name: 'freeze', from: 'D', to: 'A'");
            console.log('d1在事件Freeze前，当前状态 ' + fsm.state);
        },
        onLeaveD: function () {
            console.log('d2执行事件Freeze，离开D，当前状态 ' + fsm.state);
        },
        onEnterA: function () {
            console.log('d3执行事件Freeze，进入A，当前状态 ' + fsm);
            console.log('d3执行事件Freeze，进入A，当前状态 ' + fsm.state);
        },
        onAfterFreeze: function () {
            console.log('d4在事件Freeze后,当前状态 ' + fsm.state);
        }
        // onLeaveA: function () {                                                 //试验
        //     console.log('d2执行事件Freeze，离开A，当前状态 fsm 为 ' + fsm.state);
        // },
        // onEnternone: function () {                                               //试验
        //     console.log('d2执行事件Freeze，进入none，当前状态 ' + fsm.state);
        // }

        // onLeaveState:function () {
        //     return false; // 会终止后续转换onBeforeTransition  onBefore<TRANSITION>  onLeaveState  onLeave<STATE>  onTransition
        // }
    }

});

fsm.start(); //这个方法调用很重要，如果没有clear ，start事件点击就必须先触发这个方法,但是会先运行onEnterA。

// document.getElementById("bbbb").onclick = function () {
//     fsm.clear();
// };
// document.getElementById("aaaa").onclick = function () {
//     fsm.start();
// };
document.getElementById("aa").onclick = function () {
    fsm.melt('小姐姐', '另一个小姐姐');
};
document.getElementById("bb").onclick = function () {
    fsm.vaporize();
};
document.getElementById("cc").onclick = function () {
    fsm.condense();
};
document.getElementById("dd").onclick = function () {
    fsm.freeze();
};
document.getElementById("ee").onclick = function () {
    console.log('goto前的状态 ' + fsm.state);
    fsm.goto('C');
    console.log('goto后的状态 ' + fsm.state);
    // console.log(fsm.color);
    // console.log(fsm.girl);
    // fsm.hello();

    // goto 用法比较奇怪，会执行两个状态变化 ？？？
    // 首先是执行离开初始状态A的步骤，再进入执行相应状态（也就是说goto的状态也是由相应的状态转变而来）。
    // 例如：goto状态为D，
    // 首先（执行事件melt，离开 A 状态,当前状态 A），
    // 接着（执行事件Condense，进入液体，当前状态 D）；
    // goto状态为C
    // 首先（执行事件melt，离开 A 状态,当前状态 A），
    // 接着（执行事件Vaporize，进入C，当前状态 C）。
};
// fsm.onMelt();             //状态都是初始状态
// fsm.onFreeze();           //状态都是初始状态
// fsm.onVaporize();         //状态都是初始状态
// fsm.onCondense();         //状态都是初始状态
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// $(document).ready(function () {
// var fsm = new StateMachine({
//
//     init: 'menu',
//
//     transitions: [
//         { name: 'play1', from: 'menu', to: 'game' },
//         { name: 'quit', from: 'game', to: 'menu' }
//     ],
//
//     methods: {
//         onLeaveMenu: function() {
//
//             return new Promise(function(resolve, reject) {
//                 $('#menu').fadeOut(3000, resolve);
//                 console.log('1离开Menu,当前状态 ' + fsm.state + '隐藏 小姐姐');
//             })
//
//         },
//         onEnterGame: function() {
//             return new Promise(function(resolve, reject) {
//                 $('#game').fadeIn(2000, resolve);
//                 console.log('2进入Game,当前状态 '+ fsm.state + '显示 另一个小姐姐');
//             })
//         },
//         onLeaveGame: function() {
//             return new Promise(function(resolve, reject) {
//                 $('#game').fadeOut(2000, resolve);
//                 console.log('3离开Game,当前状态 '+fsm.state + '隐藏 另一个小姐姐');
//             })
//         },
//         onEnterMenu: function() {
//             return new Promise(function(resolve, reject) {
//                 $('#menu').fadeIn('fast', resolve);
//                 console.log('4进入Menu,当前状态 '+fsm.state + '显示 小姐姐');
//             })
//         }
//     }
// });


// document.getElementById("ff").onclick = function () {
//     fsm.play1();
//
// };
// document.getElementById("gg").onclick = function () {
//     fsm.quit();
// };
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var fsm = new StateMachine({
//     init: 'A',
//     transitions: [
//         { name: 'melt',     from: 'A',  to: 'D' },
//         { name: 'freeze',   from: 'D', to: 'A'  },
//         { name: 'vaporize', from: 'D', to: 'C'    },
//         { name: 'condense', from: 'C',    to: 'D' }
//     ]
// });
//
// fsm.state;             //当前 状态为 'A'  （转换前）
// fsm.melt();
// fsm.state;             //当前 状态为  'D' （fsm.melt()转换后）
// fsm.vaporize();
// fsm.state;             //当前 状态为 'C'     （fsm.vaporize()转换后）


// Observers will be passed a single argument containing a lifecycle object with the following attributes:
//..观察者将传递一个包含lifecycle具有以下属性的对象的参数

// transition - the transition name   过渡名称
// from - the previous state          以前的状态
// to - the next state                下一个状态

//..它创建一个具有当前状态属性的对象：

// fsm.state          （当前状态）

//在转换的生命周期中自动调用的观察者方法：fsm.onStep() 如：
//    fsm.onMelt()
//    fsm.onFreeze()
//    fsm.onVaporize()
//    fsm.onCondense()

//辅助方法：                                                 可用于条件判断
// fsm.is(s) - 如果状态s是当前状态，则返回true
// fsm.can(t) - 如果t从当前状态发生转换，则返回true
// fsm.cannot(t) - 如果t从当前状态不能发生转换，则返回true
// fsm.transitions() - 返回当前状态允许的转换列表
// fsm.allTransitions() - 返回所有可能的转换的列表
// fsm.allStates() - 返回所有可能状态的列表

//转换的生命周期按以下顺序进行：
//
// onBeforeTransition - 在任何转换之前触发
// onBefore<TRANSITION> - 在特定的转换之前触发
// onLeaveState - 离开任何状态被触发
// onLeave<STATE> - 离开特定的状态触发
// onTransition - 在任何过渡期间被触发
// onEnterState - 进入任何状态被触发
// onEnter<STATE> - 进入特定状态触发
// on<STATE> - 简写 onEnter<STATE>
// onAfterTransition - 任何转换后触发
// onAfter<TRANSITION> - 在特定的TRANSITION后触发
// on<TRANSITION> - 简写 onAfter<TRANSITION>


//Cancelling a Transition  取消转换
//
// Any observer can cancel a transition by explicitly returning false during any of the following lifecycle events:
// 任何观察者都可以通过false在以下任何生命周期事件中显式返回来取消转换：
//
// onBeforeTransition
// onBefore<TRANSITION>
// onLeaveState
// onLeave<STATE>
// onTransition
//
// All subsequent lifecycle events will be cancelled and the state will remain unchanged.
// 所有随后的生命周期事件将被取消，状态将保持不变。