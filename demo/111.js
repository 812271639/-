var fsm = new StateMachine({
    init: 'solid',
    transitions: [
        {name: 'Melt', from: 'solid', to: 'liquid'},
        {name: 'Vaporize', from: 'liquid', to: 'gas'},
        {name: 'Condense', from: 'gas', to: 'liquid'},
        {name: 'Freeze', from: 'liquid', to: 'solid'}
    ],

    methods: {
        onBeforeMelt: function (lifecycle, arg1, arg2) {
            console.log("1、 name: 'Melt', from: 'solid', to: 'liquid'");
            console.log('a1 在事件 melt 前,当前状态 ' + fsm.state);
        },
        onLeaveSolid: function () {
            console.log('a2, onLeaveSolid,当前状态 ' + fsm.state);
        },
        onEnterLiquid: function () {
            console.log('a3, onEnterLiquid,当前状态 ' + fsm.state);
        },
        onAfterMelt: function () {
            console.log('a4 在事件 melt 后,当前状态 ' + fsm.state);
            console.log();
        },
        /////////////////////////////////////////////////////////////////////////
        onBeforeVaporize: function () {
            console.log("2、 name: 'Vaporize', from: 'liquid', to: 'gas'");
            console.log('b1在事件Vaporize前,当前状态 ' + fsm.state);
        },
        onLeaveliquid: function () {

            console.log('b2, onLeaveliquid，当前状态 ' + fsm.state);
        },
        onEnterGas: function () {
            console.log('b3, onEntergas，当前状态 ' + fsm.state);
        },
        onAfterVaporize: function () {
            console.log('b4在事件Vaporize后，当前状态 ' + fsm.state);
        },
        ///////////////////////////////////////////////////////////////////////////
        onBeforeCondense: function () {
            console.log("3、 name: 'Condense', from: 'gas', to: 'liquid'");
            console.log('c1在事件Condense前，当前状态 ' + fsm.state);
        },
        onLeaveGas: function () {
            console.log('c2, onLeavegas，当前状态 ' + fsm.state);
        },
        onEnterLiquid: function () {
            console.log('c3, onEnterliquid，当前状态 ' + fsm.state);
        },
        onAfterCondense: function () {
            console.log('c4在事件Condense后，当前状态 ' + fsm.state);
        },
        /////////////////////////////////////////////////////////////////////////////
        onBeforeFreeze: function () {
            console.log("4、 name: 'Freeze', from: 'liquid', to: 'solid'");
            console.log('d1在事件Freeze前，当前状态 ' + fsm.state);
        },
        onLeaveliquid: function () {
            console.log('d2, onLeaveliquid，当前状态 ' + fsm.state);
        },
        onEnterSolid: function () {
            console.log('d3, onEntersolid，当前状态 ');
            // console.log('d3fsm : ' + fsm);
            // console.log('d3, onEntersolid，当前状态 ' + fsm.state);
        },
        onAfterFreeze: function () {
            console.log('d4在事件Freeze后,当前状态 ' + fsm.state);
        }
    }

});


document.getElementById("aa").onclick = function () {
    fsm.melt('小姐姐', '另一个小姐姐');
};
document.getElementById("bb").onclick = function () {
    fsm.vaporize();
    console.log('$、 ' + fsm.state);

    console.log(fsm.transitions());

    if (fsm.can('Condense')) {
        console.log('can、  true  ');
    } else {
        console.log('can、 false');
    }
    if (fsm.cannot('Condense')) {
        console.log('cannot、  true  ');
    } else {
        console.log('cannot、 false');
    }
    if (fsm.is('gas')) {
        console.log('is、 true');
    } else {
        console.log('is、 false');
    }

};
document.getElementById("cc").onclick = function () {
    fsm.condense();
};
document.getElementById("dd").onclick = function () {
    fsm.freeze();
};
// document.getElementById("ee").onclick = function () {
//     console.log('goto前的状态 ' + fsm.state);
//     fsm.goto('C');
//     console.log('goto后的状态 ' + fsm.state);
//     // console.log(fsm.color);
//     // console.log(fsm.girl);
//     // fsm.hello();
//     // goto 用法比较奇怪，会执行两个状态变化 ？？？
//     // 首先是执行离开初始状态A的步骤，再进入执行相应状态（也就是说goto的状态也是由相应的状态转变而来）。
//     // 例如：goto状态为D，
//     // 首先（执行事件melt，离开 A 状态,当前状态 A），
//     // 接着（执行事件Condense，进入液体，当前状态 D）；
//     // goto状态为C
//     // 首先（执行事件melt，离开 A 状态,当前状态 A），
//     // 接着（执行事件Vaporize，进入C，当前状态 C）。
// };
//


///////////////////////////////////////     另一个例子    ////////////////////////////////////////////
$(document).ready(function () {
    var fsm = new StateMachine({
        init: 'menu',

        transitions: [
            {name: 'play1', from: 'menu', to: 'game'},
            {name: 'quit', from: 'game', to: 'menu'}
        ],

        methods: {
            onLeaveMenu: function () {
                return new Promise(function (resolve, reject) {
                    $('#menu').fadeOut(3000, resolve);
                    console.log('1离开Menu,当前状态 ' + fsm.state + '隐藏 小姐姐');
                })

            },
            onEnterGame: function () {
                return new Promise(function (resolve, reject) {
                    $('#game').fadeIn(2000, resolve);
                    // alert('小姐姐不见了');
                    console.log('2进入Game,当前状态 ' + fsm.state + '显示 小姐姐不见了');

                })
            },
            onLeaveGame: function () {
                return new Promise(function (resolve, reject) {
                    $('#game').fadeOut(2000, resolve);
                    console.log('3离开Game,当前状态 ' + fsm.state + '隐藏 另一个小姐姐');
                })
            },
            onEnterMenu: function () {
                return new Promise(function (resolve, reject) {
                    $('#menu').fadeIn(2000, resolve);
                    console.log('4进入Menu,当前状态 ' + '显示 小姐姐');
                })
            }
        }
    });


    document.getElementById("ff").onclick = function () {
        fsm.play1();

    };
    document.getElementById("gg").onclick = function () {
        fsm.quit();
    };
});