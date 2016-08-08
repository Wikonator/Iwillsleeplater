(function () {
    var whatComesIn = $("#input");
    var selecta = $("#select");
    var showtime = $("#resultsBoard");

    var request = $("#butt").click(function() {
        var uBeNeedin = selecta.val();
        var name = encodeURIComponent(whatComesIn.val());

        $.get("https://api.spotify.com/v1/search" +"?q=" + name + "&type=" + uBeNeedin, function (result) {
            console.log(result);
            var items = result.albums.items;
            console.log(items);
                for (var k = 0; k < items.length; k++) {
                    $("#resultsBoard").append("<li>" + items[k].name + "<img src=' "+ items[k].images[1].url + "'" + "/>" + "</li>");
                }
        });
    });


})();
