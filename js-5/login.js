//
//
//
//
//
//
$(document).ready(function () {


    $("body").keydown(function () {
        if (event.keyCode==13) {
            $(".log").click();
        }
    });
    $("#account, #password").mousedown(function () {
        $(".verification").text("");
    });
    $("#account").mouseleave(function () {
        var account =  $("#account").val();
        var b = account.length;

        if(b<1 || b >11 ){
            $(".verification").text("无效的账号");
        }
    });
    // $("#password").mouseleave(function () {
    // var password = $("#password").val();
    // var c = password.length;
    //     if( b >11 ){
    //         $(".verification").text("无效的密码");
    //     }
    // });


    $(".log").click(function () {
        var account =  $("#account").val();
        var password = $("#password").val();
        var d = {
            name: account,
            pwd: password
        };
        // var a = JSON.stringify(d); //使用这个形式请求不到数据
        $.ajax({
            type: 'post',
            url: '/carrots-admin-ajax/a/login',
            // contentType: 'application/json;charset=utf-8', //加上这行请求不到数据
            contentType:"application/x-www-form-urlencoded",  //加上这行有数据
            // dataType: 'json',//加上这行出问题，状态为success，但是没数据
            // data: "name="+account+"&pwd="+password,    //方式一
            // data:{"name":account,"pwd":password},      //方式二
            data:d,                                    //方式三
            success: function (data,status) {
                alert("数据: \n" + data + "\n状态: " + status);
            }
        });

        // $.post("/carrots-admin-ajax/a/login",
        //     d ,
        //     function(data,status){
        //     alert("数据: \n" + data + "\n状态: " + status);
        // }
        // );
        // $http({
        //     method: 'post',
        //     url: '/carrots-admin-ajax/a/login',
        //     data:d
        // }).then(function successCallback(response) {
        //     alert("成功")// 请求成功执行代码
        // }, function errorCallback(response) {
        //    alert("失败") // 请求失败执行代码
        // });


        var b = account.length;
        var c = password.length;

        if(b < 1 || b >11 ){
            $(".verification").text("无效的账号");
        }
        else if( c <1 ){
            $(".verification").text("无效的密码");
        }

    });
});
