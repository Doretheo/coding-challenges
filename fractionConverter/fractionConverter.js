/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  let wholeNum = number.toString().split('.');
  if (Number(wholeNum[0]) === parseInt(number)) {
    return `${parseInt(number)}/1`;
  } else {
    let numerator = Number(wholeNum[0]);
    let denominator = Number(`0.${wholeNum[1]}`);
    numerator += numerator + (Math.floor(denominator) * number);
    denominator += denominator + (Math.ceil(denominator) * number);
    return `${numerator}/${denominator}`
  }
};
