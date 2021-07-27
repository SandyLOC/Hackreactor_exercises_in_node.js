//2.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

function remove(array, element) {
  // your code here:
  var newArray = [];
  array.forEach(function(num) {
    if (num != element) {
      newArray.push(num);
    }
  });
  return newArray;
}
remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]