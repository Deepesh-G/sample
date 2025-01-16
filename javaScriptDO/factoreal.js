let a = 10;
function fact(num) {
  let arr = Array.from(Array(num).keys());
  console.log(arr);
  let mul = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return mul;
}

function terd(number) {
  fac = 1;
  for (let index = 1; index < number; index++) {
    fac = fac * number;
  }
  return fac;
}

console.log(terd(a));
console.log(fact(6));
