(function() {

var tick = document.getElementsById("ticker")
var here = tick.offsetLeft;

window.requestAnimationFrame(function getJiggy()) {
  getJiggy();
}

var getJiggy = function(tick) {
  (parseInt(tick.style.left) - 1);
  getJiggy();
};

getJiggy(tick);
    })
})();



//(function stop() {
//    this.addEventListener("mouseover" function() {
