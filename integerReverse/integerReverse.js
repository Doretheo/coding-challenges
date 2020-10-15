/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

// 55
function reverseInteger(number){
  // TODO: Implement this function!
  let reverseInt = 0;
  while (number > 0) {
    // reversedInt = 0 + 5
    // number = 55 / 10 = 5.5

    // reverseInt = 50 + 5
    // number = 5.5 / 10 = 0.5
    let reverseInt = (reverseInt * 10) + (number % 10)
    // number = 5
    number /= 10;
  }
  return reverseInt;
}

// 50 % 10 = 5
// 45 % 10 = 5
// 44 % 10 = 4