  //1.Use `split` to write a function `longestWord` that takes a string as an
  argument and returns the longest word.
     // your code here:
     var arr = "the quick brown fox jumped over the lazy dog".split(" ");
      var longWord = arr[0];
      function longestWord(arr) {
        arr.forEach(function(word) {
        if(word.length >= longWord.length) {
          longWord = word;
         }
        });
        return longWord;
     };
     longestWord(arr);
