var rubarb = ["me", "can", "get", "this", "complex", "thing"];
var lingon

var sliceAndDice = function(rubarb,lingon) {
  lingon = rubarb.slice();
    lingon.reverse();
    console.log(lingon);
};

sliceAndDice(rubarb,lingon);
