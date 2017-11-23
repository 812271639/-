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

    $(".log").click(function () {
        var account =  $("#account").val();
        var password = $("#password").val();
        $(".verification").text(account + password);

        var d = {
            name: account,
            pwd: password
        };
        var a = JSON.stringify(d); //使用这个形式请求不到数据
        console.log(a);

        $.ajax({
            type: 'post',
            url: '/carrots-admin-ajax/a/login',
            // contentType: 'application/json;charset=utf-8', //加上这行请求不到数据
            contentType:"application/x-www-form-urlencoded",  //加上这行有数据
            // dataType: 'json',//加上这行出问题，状态为success，但是没数据
            // data: "name="+account+"&pwd="+password,    //方式一
            // data:{"name":account,"pwd":password},      //方式二
            // data:d,                                    //方式三
            success: function (data,status) {
                alert("数据: \n" + data + "\n状态: " + status);
            }
        });
    });

    // $.post("/carrots-admin-ajax/a/login",
    //     d ,
    //     function(data,status){
    //     alert("数据: \n" + data + "\n状态: " + status);
    // }
    // );


});
