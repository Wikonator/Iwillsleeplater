var n

function sum() {
  var zero = 0;
  for (var x = 0 ; x < arguments.length ; x++) {
      zero = zero + arguments[x];
      console.log(zero);

  }
  return zero;
}

n = sum(5, 9, 15, 4);
