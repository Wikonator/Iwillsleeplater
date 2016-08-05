(function() {

    var request = new XMLHttpRequest;
      var tick = document.getElementById("ticker");
      var here = tick.offsetLeft;
      var links = [];
      var headers = [];

request.open("GET", "tickersheadlines.json");

request.send();

request.addEventListener("readystatechange", function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        try {
            var status = request.status;
        } catch(e) {
            console.log(e);
            return;
        }
        if (status != 200) {
            console.log(e);
        }
        try {
            var data = JSON.parse(request.responseText);
            tagify(data);
        } catch(e) {
            console.log("bad JSON");
            return;
        }
    }
});

function tagify(data) {
    for (var b in data) {
        tick.innerHTML += '<a href ="' + b + '">' + data[b] + "</a>";
           b++;
    }
 }


     var getJiggy = function() {
       var numberNew = here - 2 ;
        here = numberNew;
        tick.style.left = numberNew + "px";
        animation = window.requestAnimationFrame(getJiggy);
      };

    var animation = window.requestAnimationFrame(getJiggy);

    tick.addEventListener("mouseover", stopThisMaddness);
    tick.addEventListener("mouseleave", getJiggy);

    function stopThisMaddness() {
      window.cancelAnimationFrame(animation);
}



})();
