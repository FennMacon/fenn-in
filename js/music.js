$(document).ready(function() {
    $("#music").click(function() {
        $("#mFrame").hide();
        });
    $(".album").click(function() {
        $(".album").removeClass("albumActive");
        $(this).addClass("albumActive");
    });
    $("#m1").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "http://bandcamp.com/EmbeddedPlayer/album=32513380/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m2").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "http://bandcamp.com/EmbeddedPlayer/album=117887430/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m3").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "http://bandcamp.com/EmbeddedPlayer/album=2284468455/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m4").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "http://bandcamp.com/EmbeddedPlayer/album=3185434507/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m5").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "http://bandcamp.com/EmbeddedPlayer/album=1112653695/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m6").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "http://bandcamp.com/EmbeddedPlayer/album=396580859/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m7").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "https://bandcamp.com/EmbeddedPlayer/album=3538707837/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m8").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "https://bandcamp.com/EmbeddedPlayer/album=3146983005/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m9").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "https://bandcamp.com/EmbeddedPlayer/album=2386182360/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m10").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "https://bandcamp.com/EmbeddedPlayer/album=2184512833/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m11").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "https://bandcamp.com/EmbeddedPlayer/album=3874242250/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
    $("#m12").click(function() {
        $("#mFrame").fadeIn(1000,"swing");
        $("#mFrame").attr("src", "https://bandcamp.com/EmbeddedPlayer/album=392852119/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/");
    });
});