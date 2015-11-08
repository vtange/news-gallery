(function() {
    //start of function
var filters=angular.module('filters', []);
filters.filter('online', function() {
    return function(input) {
        var out = [];
        for (var i = 0; i < input.length; i++) {
            if(input[i].stream != null){
                out.push(input[i]);
            }
        }
        return out;
    }
});
filters.filter('truncate', function() {
        return function (input, num) {

    //trim to num# of letters
      if (input.length > num) {

      var firsttrim = input.substring(0,num);

    //re-trim if in the middle of a word by substringing from letter 0 to the first space encountered via counting from the back(firsttrim.length)
        firsttrim = firsttrim.substring(0, Math.min(firsttrim.length, firsttrim.lastIndexOf(" ")));

        return firsttrim+"...";

      }
      // if str.length is less than or equal to num, just return the string.
      else {
        return input;
      }
    }
});

      //end of function
})();