//1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed.

//Your code goes here:
var arr = "supercalifragilisticexpialidocious".split("");
reversed = [];
var reverse = function(arr) {
   arr.forEach(letter => reversed.unshift(letter));
   return reversed.join("");
};
reverse(arr);