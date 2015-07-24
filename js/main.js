$(document).ready(function() {
    $.getJSON("http://siioh.zapto.org:41010/", function(data) {
        var j = JSON.parse(JSON.stringify(data));
        
        if (j != null) {
            $("#status").html("all systems nominal");
            $("#players").html("players: " + j.players + "/" + j.maxplayers);
            $("#status").removeClass("warn err");
            $("#status").addClass("good");
        } else {
            $("#status").html("server awry. try connecting?");
            $("#status").removeClass("good err");
            $("#status").addClass("warn");
        }
    }).fail(function() {
        $("#status").html("server down :(");
        $("#status").removeClass("good warn");
        $("#status").addClass("err");
    });
});