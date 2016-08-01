
  var word = "Craytree";
  var letterArray = word.split("");
  var wordSpace = document.getElementById("Wordspace");

  console.log(letterArray);

function spaces(letterArray) {
    var spanner = ""
  for (i = 0 ; i < letterArray.length ; i++ ) {
      spanner += '<div class="empty">___</div>'
    } document.getElementById("Wordspace").innerHTML = spanner
  }

spaces(letterArray);

window.addEventListener("keypress", function(e) {
    for (x = 0 ; x < letterArray.length ; i++) {
       
    }

});

//spaces(letterArray);
//console.log(spaces(letterArray));
