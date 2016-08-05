      var xhr = new XMLHttpRequest;
      var word = "";
      var letterArray;
      var spannySpans;
      var badCounter = -1;
      var goodCounter = -1;
      var wordSpace = document.getElementById("Wordspace");
      var wrongLetters = [];
      var rYouPressed = [];
      var badPress = [];
      var listItems = document.getElementsByTagName("li");
        for (var l in listItems) { wrongLetters[l] = listItems[l]
        };
      var LoseWin = document.getElementById("LoseWin");
      var vicAud = new Audio("FlawlessVictory.mp3");
      var loseAud = new Audio("uLose.mp3");

      var canvasGo = function() {
       var hanger = document.getElementById("hanger")
       var canvas = hanger.getContext("2d");
       canvas.strokeStyle = "#900";
       canvas.beginPath();
       canvas.moveTo(50, 140);
       canvas.lineTo(250,140);
       canvas.moveTo(100,140);
       canvas.lineTo(100,35);
       canvas.lineTo(200,35);
       canvas.moveTo(120,35);
       canvas.lineTo(100,45);
       canvas.stroke();
      };

    canvasGo();

xhr.open("GET", "http://randomword.setgetgo.com/get.php?len=6");
xhr.send();
xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        return;
    }
    var status;
    try {
        status = xhr.status;
    } catch(e) {
        console.log(e);
        return;
    }
    if (status != 200 ) {
        console.log("its not here, boss!");
        return;
    } try {
        word = xhr.responseText;
        var lower = word.toLowerCase();
            letterArray = lower.split("");
            spaces(letterArray);
            spannySpans = document.getElementsByClassName("empty");
    } catch(e) {
        console.log("nope!");
        return
    }
});

function spaces(letterArray) {
    var spanner = ""
    for (var i = 0 ; i < letterArray.length ; i++ ) {
        spanner += '<div class="empty">___</div>'
    }
    document.getElementById("Wordspace").innerHTML = spanner;
  }

function victory() {
    if (goodCounter == letterArray.length) {
        vicAud.play();
        LoseWin.style.display = "block";
        LoseWin.innerHTML = "FLAWLESS VICTORY!!"
    }
};

function soreLoser() {
    if (badCounter == 6) {
        loseAud.play();
        LoseWin.style.display ="block";
        LoseWin.style.fontSize = "60px";
        LoseWin.style.color = "black";
        LoseWin.innerHTML = "SHAMEFUR DISPRAY! COMMIT SUDOKU!";
    }
}


function drawNextPart(c) {
    var paintJob = {
        drawRope: function() {
            canvas.beginPath();
            canvas.moveTo(175,35);
            canvas.lineTo(175,60);
            canvas.stroke();
        } ,
        drawNoose: function() {
            canvas.beginPath();
            canvas.arc(175, 72, 12, 0, 6.283, false);
            canvas.stroke();
        } ,
        drawBody: function() {
            canvas.beginPath();
            canvas.moveTo(175,80);
            canvas.lineTo(175,110);
            canvas.stroke();
        } ,
        drawLeftLeg: function() {
            canvas.beginPath();
            canvas.moveTo(175,110);
            canvas.lineTo(150,130);
            canvas.stroke();
        },
        drawRightLeg: function () {
            canvas.beginPath();
            canvas.moveTo(175,110);
            canvas.lineTo(190,110);
            canvas.stroke();
        },
        drawLeftArm: function () {
            canvas.beginPath();
            canvas.moveTo(175,87);
            canvas.lineTo(167,99);
            canvas.stroke();
        },
        drawRightArm: function () {
            canvas.beginPath();
            canvas.moveTo(175,87);
            canvas.lineTo(183,99);
            canvas.stroke();
        }
        paintJob [c]();
    };

}

window.addEventListener("keypress", check);

function check(e) {
    var keyPress = e.key;
    var letterFound = false;
    for (var x=0 ; x < letterArray.length; x++) {
        if(letterArray[x] == keyPress ) {
            if (rYouPressed.indexOf(keyPress) == -1) {
                rYouPressed.push(keyPress);
                console.log(rYouPressed);
              spannySpans[x].innerHTML = keyPress;
              letterFound = true;
              goodCounter += 1;
              victory();
              console.log("good " + goodCounter);
          } else { return;
              }
         }
      }
    if (letterFound == false) {
      for (var y = 0; y < wrongLetters.length; y++) {
          if (wrongLetters[y].innerText == keyPress.toUpperCase() ) {
              if (badPress.indexOf(keyPress) == -1) {
                  badPress.push(keyPress);
            wrongLetters[y].style.textDecoration = "line-through";
            wrongLetters[y].style.backgroundColor = "red";
            badCounter += 1;
            drawNextPart(badCounter);
            console.log("bad " + badCounter);
            soreLoser();
        } else {
            return;
            }
         }
      }
    }
  }
