var first = [-12, 1, 17, 52, -78, 10, -678, 3, -7];
var second;

var MoreThan = function(u) {
  return u < 0;
}

var getLessThanZero = function(a, b) {
  b = a.filter(MoreThan);
  console.log(b);

}


getLessThanZero(first, second);
