//1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.

var average = function(array) {
 var i = 0;
 var sum = 0;
 array.forEach(function(num) {
  sum += num;
   i += 1;
 });
return sum/i;
};
average([1, 3, 6, 2, 3]);//=> 3