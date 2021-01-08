/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  debugger;
  const permutations = {};

  var iteration = (text) => {
    if (!permutations[text]) {
      permutations[text] = true;
    }

    for (let i = 0; i < text.length; i++) {
      const prefix = text.substring(0, i);
      const ending = text.substring(i + 1)
      console.log('prefix: ' + prefix + ' ' + i)
      console.log('ending: ' + ending + ' ' + i)
      iteration(prefix + ending)
    }
  }
  iteration(str)
  return Object.keys(permutations)
};

powerSet('abc');



// var powerSet = function(str) {
//   var values = {};
//   var result = [];
//   var finalRes = {};
//   result.push('');
//   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','u','r','s','t','u','v','w','x','y','z']
//   let index = 0;

//   while (index < 27) {
//       values[index] = alphabet[index];
//       index++;
//   }
//   // create every permutation of the string
//   var permutation = function (str) {

//     for (var i = 0; i < str.length; i++) {
//       let firstChar = str[i];
//       let leftoverChar = str.substring(0, i) + str.substring(i + 1);
//       let nextSet = permutation(leftoverChar);
//       console.log(nextSet)

//       for (var j = 0; j < nextSet.length; j++) {
//         // store the permutations inside a container
//         result.push(firstChar + nextSet[j])
//       }
//     }
//   }
//   let counter = 0;
//   for (var set in values) {
//     // sort the container based on adding the char's value
//     finalRes[result[0]] = values[(result[0].split(''))]
//     // if two strings have the same value, do nothing
//   }
//   permutation(str)
//   // sort the result based on it's values and return
//   return result.sort();
// };

// powerSet('abcd');