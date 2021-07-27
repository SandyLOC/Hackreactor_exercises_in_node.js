//3.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.

 //Your code goes here:
 var arr = "supercalifragilisticexpialidoucious".split("");
 var countChar = function(arr, char) {
 counter = 0;
   arr.forEach(function(el) {
     if(el == char) {
       counter += 1;
     }
   });
   return counter;
 };
 countChar(arr, "i");//=> 7