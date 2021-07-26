//3.Write a function that takes an array of words and returns a sentence (single string) with all the element strings concatenated together:

string ="the quick brown fox jumped over the lazy dog";
strings = string.split(" ");
var sentence = function(strings){
    // your code here:
  var entireString = strings.reduce(function(accum, word) {
    return accum + " "+ word;
  }," ");
  return entireString;
};
sentence(strings);