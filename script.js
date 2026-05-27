$(document).ready(function () {

    $("#showMessage").click(function () {

        $("#message").hide();

        $("#message")
            .html("Website is successfully hosted!")
            .fadeIn(1000);

    });

});