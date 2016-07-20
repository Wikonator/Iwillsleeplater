var oneInAMillion = function(x) {
    if (x <= 0) {
      console.log("Computer says no");
    } else if (isNaN(x)) {
      console.log("Computer says no");
    } else if (x>0) {
        if(x>1000000) {
          console.log(x);
        }
        else { for (; x<=1000000; x *= 10) {}
           console.log(x);
        }
      }
    }

oneInAMillion(400);
