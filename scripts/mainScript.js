
var arr1 = [],
    arr2 = [],
    differentLength   = "Arrays are not the same in length",
    differentElements = "Array's elements differ....",
    arrMatch          = "Arrays are a complete match";

function setupFirstArr() {
  var arr1Length = prompt('enter arr1 length');

  if (arr1Length.length  <= 0) {
    alert('input required');
  }

  for (var i = 0; i < arr1Length; i++) {
    var input = prompt('eneter elems');
    arr1.push(input);
  }
};

function setupSecondArr() {
  var arr2Length = prompt('enter arr2 length');

  if (arr2Length.length  <= 0) {
    alert('input required');
  }

  for (var i = 0; i < arr2Length; i++) {
    var input = prompt('eneter elems');
    arr2.push(input);
  }
};



Array.prototype.diff = function (arr) {
    var mismatch = [];

    // compare length of arrays and inform user if different
    if (this.length !== arr.length) {
        alert(differentLength)
    };

    // comapre arrays by each element and push into
    for (i = 0; i < arr.length; i++) {
        if (this[i] !== arr[i]) {
            mismatch.push(this[i] + ' and ' + arr[i] + '/');
        };
    };

    // alert user of mismatches in compared arrays
    if (mismatch.length > 0) {
        alert(differentElements + ' ' + 'Listing differences: ' + mismatch)
    };

    // tell user that arrays are a match
    if (this.length == arr.length && mismatch.length == 0) {
        alert(arrMatch)
    };
};
