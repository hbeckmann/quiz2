'use strict';

function arraySum(arr) {
  if(!sum){var sum = 0};
  for(var i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      sum += arraySum(arr[i]);
    }else{
      sum += arr[i];
    }
  }
  return sum;
}

module.exports = arraySum;
