//Write a function that takes an array of numbers and returns the product of all the numbers:
var product = function(numbers) {
  // your code here:
  var multiply = numbers.reduce(function(accum, num) {
    return accum * num;
  },1);
  return multiply;
};

product([2, 4, 6]); // => 48