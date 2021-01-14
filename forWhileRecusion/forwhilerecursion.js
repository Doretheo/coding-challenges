function pow(base, power, temp) {
  if (temp === undefined) { temp = base }
  while (power - 1 > 0) {
    power--
    base = base * temp
  }
  return base
}


function powe(base, power, temp) {
  if (temp === undefined) { temp = base }
  for (var i = power - 1; i > 0; i--) {
    base = base * temp
  }
  return base
}

function powr(base, power, temp) {
  if (power === 0) { return 1 }
  if (temp === undefined) { temp = base }
  if (power > 1) {
    base = base * temp
    power--
  } else {
    return base
  }
  return powr(base, power, temp)
}


console.log(pow(3, 4))
console.log(powe(3, 4))
console.log(powr(3, 4))










