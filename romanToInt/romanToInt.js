var romanToInt = function(s) {
  let values = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  let res = 0;

  for (let i = 0; i < s.length; i++) {
      let curr = s[i]
      let next = s[i+1];

      curr = values[curr];
      next = values[next];

      if (next > curr) {
          res += next - curr;
          i += 1
      } else {
          res += curr;
      }
  }
  return res;
};

let input_1 = 'XV' //15
let input_2 = 'XIV' //14
let input_3 = 'MCMXCIV' //1994
let input_4 = 'LVII' //52