/*Array.prototype.diff = function(arr) {

  if (this.length != arr.length) {
    alert("arrays r not da same in length");
  }

 else if (this.length == arr.length) {
    for (i = 0; i < arr.length; i++) {
      if (this[i] !== arr[i]) {
        errors.push(this[i] && arr[i] + ' ' + 'is a mismatch');
      }
    }
   alert("mismatches found: " + errors);
  }
}
var errors = []
var x

  [1, 2, 4].diff([1, 2, 2])*/

Array.prototype.diff = function(arr) {

  var missmatch         = [];
  var differentLength   = "Arrays are not the same in length";
  var differentElements = "Array's elements differ...."
  var arrMatch          = "Arrays are a complete match"

  var compareLength = function() {
    this.length = arr.length
  };

  var compareElements = function() {
    for (i = 0; i < arr.length; i++) {
      if (this[i] !== arr[i]) {
        missmatch.push(this[i] + ' and ' + arr[i] + '/');
      }
    }
  };

  function result() {
    if (compareLength = false) {alert(differentLength)}
    else if (missmatch.length != 0) {alert(differentElements + ' ' + 'Listing differences: ' + missmatch)}
    else if (compareLength == true && missmatch.length == 0) {alert(arrMatch)}
  };

  (function runDis() { compareLength(); compareElements(); result(); })();
}

var x

[1,2,3].diff([5,6,7])
