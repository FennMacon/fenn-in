$(document).ready(function() {
    $(".fillIn").hide();
    $("#splash").click(function() {
            $(".open").removeClass("active");
            $(".fillIn").hide();
    });
    $("#art").click(function() {
            $(".open").removeClass("active");
            $("#art").addClass("active");
            $(".fillIn").hide();
            $("#artFill").fadeIn(1000,"swing");
        });
    $("#music").click(function() {
            $(".open").removeClass("active");
            $("#music").addClass("active");
            $(".fillIn").hide();
            $("#musicFill").fadeIn(1000,"swing");
        });
    $("#web").click(function() {
            $(".open").removeClass("active");
            $("#web").addClass("active");
            $(".fillIn").hide();
            $("#webFill").fadeIn(1000,"swing");
        });    

    $("#resume").click(function() {
            $(".open").removeClass("active");
            $("#resume").addClass("active");
            $(".fillIn").hide();
            $("#resumeFill").fadeIn(1000,"swing");
        });
    $("#contact").click(function() {
            $(".open").removeClass("active");
            $("#contact").addClass("active");
            $(".fillIn").hide();
            $("#contactFill").fadeIn(1000,"swing");
        });
});