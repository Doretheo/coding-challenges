/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  const common = [];
  let strSplitOne = string1.split('');
  let strSplitTwo = string2.split('');

  if (string1.length === 0) {
    return string2;
  } else if (string2.length === 0) {
    return string1;
  } else if (string1 === string2) {
    return string1;
  }

  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (strSplitOne[i] === strSplitTwo[j] && common.indexOf(string2[j]) < 0) {
        common.push(string2[j]);
      }
    }
  }
  return common.join('');
};

var commonCharacters = (a, b) => {
  let chars = {};
  let res = "";

  for (let i = 0; i < a.length; i++) {
    if (!chars[a[i]]) {
      chars[a[i]] = 1
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (chars[b[i]]) {
      res += b[i];
      delete chars[b[i]];
    }
  }

  return res;
}

console.log(commonCharacters('awgeagfers', 'awgrgsoad'));
console.log(commonCharacters('1581932847', '32418927512'));