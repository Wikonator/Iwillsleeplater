(function () {
    var whatComesIn = $("#input")
    var showtime = $("#resultsBoard");
    var resFor = $("#resultsFor")
    var request = $("#butt").on("click", function() {
        $("li").remove();
        var selecta  = $("#select").val();
        var name = encodeURIComponent(whatComesIn.val());
        console.log(selecta);

        $.get("https://api.spotify.com/v1/search", {
            q: name,
            type: selecta
        }, function (result) {
            var items = result[selecta + "s"].items;
            console.log(result);
            if (items.length == 0) {
                $("#resultsBoard").append("<li>" + "Nothing here Boss, I even checked the shed where you keep the bodies..." + "</li>")
            } else {

                for (var k = 0; k < items.length; k++) {
                    var img = items[k].images[0].url
                    if (typeof img == "undefined") {
                        img = "http://tinypic.com/view.php?pic=rlyw0j&s=6#.V6nhjTXQM28"
                    }

                    var spotifyURL =   items[k].external_urls.spotify
                    $("#resultsBoard").append("<li> <img src=' " + img +" '/> <a href='" + spotifyURL + " '>" +
                     items[k].name + "</a> </li>");
                    $("#resultsFor").html("showing results for: " + whatComesIn.val());
                 }
              }
              function next() {
                  var nextOnes = result[selecta + "s"].next 
              }
            });
    });



// $(window).height();
// window and the "scrollHeight" of the document

})();
