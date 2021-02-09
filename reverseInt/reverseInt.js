var reverse = function(x) {
  let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x)
  return (reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0);
};

let input_1 = 123 //321
let input_2 = -123 //-321
let input_3 = 120 //21
let input_4 = 0 //0