//
//
//
//
//
//



$(document).ready(function () {



    $(".log").click(function () {
        var account =  $("#account").val();
        var password = $("#password").val();
        $(".verification").text(account + password);
    });

});

