//2.Write a function keep that "keeps" certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

//Your code goes here:
var arr = "the quick brown fox jumped over the lazy dog".split(" ");
var keep = function(arr, arg) {
newArr = [];
  arr.forEach(function(element) {
    if (arg(element) === true) {
      newArr.push(element);
   }
 });
 return newArr;
};
keep(arr, function(element){
return element.length === 4;
});

//You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.

//Your code goes here:
var arr = "the quick brown fox jumped over the lazy dog".split(" ");
var evenLengthWords = function(arr, arg) {
newArr = [];
 arr.forEach(function(element) {
   if (arg(element) === true) {
     newArr.push(element);
   }
 });
 return newArr;
};
evenLengthWords(arr, function(element){
return element.length %2 == 0;
});