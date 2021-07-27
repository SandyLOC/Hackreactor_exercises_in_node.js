//3.Write a function called min that find the smallest number in an array of numbers and returns it.
var min = function(array) {
  // your code here:
  small = array[0];
  array.forEach(function(num) {
    if (num < small) {
      small = num;
    }
  });
  return small;
};

min([100, 54, 73, 8, 12, 3]); // => 3