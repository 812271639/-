// var obj = {
//     name:'小姐姐',
//     age:25,
//     home:'China',
//     say:function(){
//         return  this.home
//     }
// };
// for(var a in obj){
//     console.log(a + "")
// }
// // function obj(name, age, home){
// //     this.name = name;
// //     this.age = age;
// //     this.home = home;
// // }
// // var girl = new obj('小姐姐 ',25,'北京');
// // console.log(girl.name + girl.age +

var arr1 = [];
var i=1;
console.log(arr1);
$(document).ready(function () {

    var arr2 = [];

    $('#bt').click(function () {

       var arr3 = [];

       i += 1;
       arr1.push(i);
       arr2.push(i);
       arr3.push(i);

        console.log(arr1);
        console.log(arr2);
        console.log(arr3);
   })
});


var i =1;
var arr = [];
$(document).ready(function () {


    $('#bt').click(function () {


        i += 1;
        arr.push(i);
        console.log(i);
        console.log(arr);

    })
});

console.log(arr);
