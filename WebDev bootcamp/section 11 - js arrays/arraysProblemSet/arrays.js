//printReverse([1,2,3,4]);
//4
//3
//2
//1

printReverse([1,2,3,4]);
console.log(isUniform(['a', 'a', 'a']));
console.log(isUniform(['a', 'a', 'b']));
console.log(sumArray([1,2,3,4]));
console.log(sumArray2([1,2,3,4]));
console.log(maxValue([5,2,3,4]));



function printReverse(arr){
  for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}


function isUniform(arr){
  for (var i = 1; i < arr.length; i++){
      if(arr[i] != arr[0]){
        return false;
      }
  }
  return true;
}

function sumArray(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function sumArray2(arr){
  var sum = 0;
  arr.forEach(function(element){
    sum += element;
  });
  return sum;
}

function max(arr){
  var max = 0;
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

function maxValue(arr){
  return Math.max(...arr);
}
