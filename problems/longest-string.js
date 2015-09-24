'use strict';

function longestString(arr) {
  var stringLen = 0;
  var longString;
  for (var i=0; i<arr.length; i++){
    if(arr[i].length > stringLen && typeof arr[i] == "string"){
      longString = arr[i];
      stringLen = arr[i].length;
    }
  }
  return longString;
}

module.exports = longestString;
