// Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.
function evenBinary(string) {
  let biDecimal = '421';
  let res = {};
  let nums = string.split(' ');

  // loop through binary set
  for (let i = 0; i  < nums.length; i++) {
    let binary = nums[i];
    let sum = 0;
    // skip odd iterations
    if (binary[binary.length - 1] === '0') {
      // add up value of even binary
      for (let j = 0; j < binary.length; j++) {
        sum += (Number(binary[j]) * biDecimal[j]);
      };

      // auto sort using an object
      res[sum] = binary;
    };
  }

  // convert object to array for easy removal and already sorted
  let evenBinaries = Object.values(res);

  // swap only even binaries with current minimum even binary
  nums.forEach((num, index) => {
    if (num[num.length - 1] === '0') {
      let min = evenBinaries.shift();
      nums[index] = min;
    }
  })

  return nums;
}

evenBinary("101 111 100 001 010") //"101 111 010 001 100"
evenBinary("110 011 001 100 101") //"100 111 001 110 101"

