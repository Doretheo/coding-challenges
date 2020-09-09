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
  if (typeof string === 'string') {
    string = string.split('');
  } else {
    string = string.toString().split('');
  }

  // add a container to hold all the anagrams
  let anagrams = [];
  anagrams.push(string.join(''))
  // console.log(anagrams)

  // create a for loop to iterate through the string array
  for (var i = 0; i < 100; i++) {
     anagrams.push(mixingString(i, i+1, string));
  }

  // return anagrams
  return anagrams.filter(unique);
};

var unique = function(value, index, array) {
  return array.indexOf(value) === index;
}

var mixingString = function (current, next, array) {
  let temp = array[current];
  array[current] = array[next];
  array[next] = temp;
  return array.join('');
}

// debugger;
allAnagrams('abc');