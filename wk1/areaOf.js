var Rectangle = function(width,height) {
  this.width = width;
  this.height = height;
//  this.getArea = function() {
//    if (this instanceof Rectangle) {
//      return this.width * this.height;
//    } else {
//      return this.width * this.width;
//    }
//  }
//}
 Rectangle.prototype.getArea = function() {
      if (this instanceof Rectangle) {
    return this.width * this.height;
  } else {
    return this.width * this.width;
  }
 }
};
//     wow, this actually works!! :O


var Obdlznik = new Rectangle(5,2);

var Square = function(width) {
    this.width = width;
    this.getArea = function() {
      if (this instanceof Rectangle) {
        return this.width * this.height;
      } else {
        return this.width * this.width;
      }
   }
}

var Stvorec = new Square(3);

// Square.prototype.getArea = function() {
//      if (this instanceof Rectangle) {
//    return this.width * this.height;
//  } else {
//    return this.width * this.width;
//  }
// }
//}



console.log(Obdlznik.getArea());
