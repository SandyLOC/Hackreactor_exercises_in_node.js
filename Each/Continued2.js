//2.Write a function shortestWord that works like longestWord, but returns the shortest word instead. //your code goes here:

var arr = "the quick brown fox jumped over a lazy dog".split(" ");
var shortestWord = function(arr) {
var short = arr[0];
  arr.forEach(function(word) {
    if(word.length <= short.length) {
      short = word;
    }
  });
  return short;
};
shortestWord(arr);//=> a