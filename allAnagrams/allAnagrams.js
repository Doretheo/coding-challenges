/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  // check for edge cases
    debugger;
    let anagrams = {};

    var swapLetters = function(text, remainder) {
      if (text.length === string.length) {
        anagrams[text] = true;
      }

      for (let i = 0; i < remainder.length; i++) {
        swapLetters(text + remainder[i], remainder.slice(0,i) + remainder.slice(i+1))
      }
    }
    swapLetters('', string)
    return Object.keys(anagrams);
  }

   allAnagrams('abc');


   // abc
   // first for loop
    // a + ('' + bc) (i=0) --> abc
      // ab + c (i = 0, i = 0) --> abc
      // ac + b (i = 0, i = 1) --> acb
    // b + (a + c) (i=1) ---> bac
      // ba + c (i = 0, i = 0) --> bac
      // bc + a (i = 0, i = 1) --> bca
    // c + (a + b) (i=2) ---> cab
      // ca + b (i = 0, i = 0) --> cab
      // cb + c (i = 0, i = 1) --> cbc

var allAnagrams = (string) => {
  let anagrams = {};

  var generate = (str, choices) => {
    if (str.length === string.length) {
      anagrams[str] = true;
    };

    for (let i = 0; i < choices.length; i++) {
      allAnagrams(str + choices[i], choices.slice(0,i) + choices.slice(i + 1));
    }
  }
  generate('', string);
  return Object.keys(anagrams);
}

var allAnagrams = (string) => {
  let words = {};
  if (!string.length) {
    return string;
  }

  var permutate = (building, leftover) => {
    if (building.length === string.length) {
      return words[building] = true
    }

    for (let i = 0; i < leftover.length; i++) {
      permutate(building + leftover[i], leftover.slice(0,i) + leftover.slice(i + 1))
    }
  }
  permutate('', string);
  return Object.keys(res);
}