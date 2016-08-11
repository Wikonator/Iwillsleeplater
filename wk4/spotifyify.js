(function () {
    var whatComesIn = $("#input");
    var showtime = $("#resultsBoard");
    var resFor = $("#resultsFor");
    var template = $("#kidMeNot").html();
    var compilationHere = Handlebars.compile(template);
    var moar = $("#moar")

    var request = $("#butt").on("click", function() {
        $("li").remove();
        var selecta  = $("#select").val();
        var name = encodeURIComponent(whatComesIn.val());
          $.get("https://api.spotify.com/v1/search", {
             q: name,
             type: selecta
          }, function (result) {
            console.log(result)
            var whatIGot = result[selecta + "s"].items;
            console.log(whatIGot);
            if (whatIGot.length == 0) {
                $("#resultsBoard").append("<li>" + "Nothing here Boss, I even checked the shed where you keep the bodies..." + "</li>")
            } else {
                var arr = [];
                (function feedMe (whatIGot) {
                    for (var i = 0; i < whatIGot.length; i++) {
                        var img = whatIGot[i].images[0].url;
                        console.log(img);
                        if (typeof img == "undefined") {
                            img = "http://tinypic.com/view.php?pic=rlyw0j&s=6#.V6nhjTXQM28"
                        }
                        var spotifyURL = whatIGot[i].external_urls.spotify;
                        var name = whatIGot[i].name;
                        var obj = {name: name, spotifyURL: spotifyURL, img: img};
                        arr.push(obj);
                    };
                    var wannaUseU = compilationHere(arr);
                    $("#resultsBoard").html(wannaUseU);
                    $("#resultsFor").html("showing results for: " + whatComesIn.val());
                })(whatIGot);
              }
              function next() {
                  var nextOnes = result[selecta + "s"].next
                  console.log(nextOnes);
              }
             next();
         });
    });



// $(window).height();
// window and the "scrollHeight" of the document

})();
