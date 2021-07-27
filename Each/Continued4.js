//4.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.

 //Your code goes here:
 var arr = "the quick brown fox jumped over a lazy dog".split(" ");
 var evenLengthWords = function(arr) {
 evens = [];
   arr.forEach(function(word) {
     if (word.length % 2 == 0) {
       evens.push(word);
     }
   });
   return evens;
 };
 evenLengthWords(arr);//=> [jumped, over, lazy]