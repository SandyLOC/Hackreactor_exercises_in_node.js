//3.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.

var even = [];
var evens = function(array) {
 array.forEach(function(num){
   if (num % 2 == 0) {
     even.push(num);
   }
 });
return even;
};
evens([0, 1, 3, 6, 2, 3, 28, 44]);//=>[ 0, 6, 2, 28, 44 ]