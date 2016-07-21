var ha = {
  a: "lol",
  b: "kek",
  c: "bur",
  d: "may"
};

var hoho = [45,84,75,69,125,124,111,745];

var theFunctionThatIsGivenToMe = function (arg1,arg2) {
    console.log("The value of "+ arg2 +" is "+ arg1);
};

var each = function (who,theFunctionThatIsGivenToMe) {
  if (who.isArray) {
    for (; x < who.length; x++) {
        theFunctionThatIsGivenToMe(who[x],x);
      }
  } else if (typeof who == "object") {
    for (var x in who) {
          theFunctionThatIsGivenToMe(who[x],x);
    }
  } else {
    console.log("Nothing happens!");
  }
}


console.log(each(hoho,theFunctionThatIsGivenToMe));
