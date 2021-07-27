//Write a function that takes an array of numbers and returns the sum of all the numbers:
var sum = function(numbers) {
  // your code here:
  var adding = numbers.reduce(function(accum, num) {
    return accum + num;
  }, 0);
  return adding;
};

sum([2, 4, 6]); // => 12