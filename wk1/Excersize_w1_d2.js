
var item = {};

if  (Array.isArray(item)) {
        console.log("array");
  }
else if (typeof item === "string") {
  console.log("string");
  }
else if (typeof item === "boolean") {
    console.log("boolean");
  }
else if (typeof item === "undefined") {
  console.log("undefined");
  }
else if (item == null) {
    console.log("null");

  }
else if (typeof item == "function") {
        console.log("function");
      }
else if (typeof item === "object") {
          console.log("object");
        }
else if (isNaN(item)) {
  console.log("NaN");
        }
else if (typeof item === "number") {
            console.log("number"); }
else {
        console.log("I have no idea!");
         }
