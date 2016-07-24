var invertCase = function(input) {
  var gString = "";
  for (i = 0; i < input.length; i++) {
    var character = input[i]
     if  (!isNaN(character)) {
       continue;
    } else if (character == character.toUpperCase() ) {
          gString += character.toLowerCase();
    } else if (character == character.toLowerCase() ) {
       gString += character.toUpperCase();
    }
  }
return gString;
}

console.log (invertCase("thisIsTakingWay2Long"));
