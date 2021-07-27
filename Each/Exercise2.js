//2.Refactor the following imperative code to be declarative by using the forEach() native array method instead of a for loop:
var maxNumImperative = function(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

var maxNumDeclarative = function(array) {
  // your code here:
  var max = 0;
  array.forEach(function(num){
    if(num > max) {
      max = num;
    }
  });
  return max;
};
maxNumDeclarative([1, 3, 5]);