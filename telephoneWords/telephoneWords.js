/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  // create a container to store the results
  // when length of temp = len of digitString, add to the result
  let digitWords = [];
  // maybe create a temp array to store individual values
  let tempValues = [];
  // create a recursive function
  var numberToWords = function(result, index) {
    // exit the function when the length of the return value is equal to length of digitString
    if (index === digitString.length) {
      // if true, add the result into the results array
      return digitWords.push(result.join(''));
    }

    for (var i = 0; i < phoneDigitsToLetters[digitString[index]].length; i++) {
      // grab the first value at each number key
      // push the value to temp array
      tempValues.push(phoneDigitsToLetters[digitString[index]][i]);
      // call recursive function on temp array to keep creating instances with the first letter
      // calling it at this point will add two letters before next loop
      // pass in temp array instead of results array to keep added to the digitWord
      // increment index to move to the next letter in the object's key-value pair
      numberToWords(tempValues, index + 1);
      // the values keep concating with each other
      // tempValues.splice(0,index);
      // tempValues = [];
      // grab remaining values start at index and continue added from there
      tempValues.splice(index)
    }
  }
  // call recursive function
  // pass in empty array, and index at 0 to start off
  // has to be zero in order to grab first letter
  numberToWords([], 0)
  // return results
  return digitWords;
};
