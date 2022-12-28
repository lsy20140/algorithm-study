function solution(n) {
  // const split = [...n.toString()];
  // const toNumbers = arr => arr.map(Number);

  // return toNumbers(split).reverse();

  return (n+"").split("").reverse().map(v => Number(v));
}

// test
console.log("결과1 "+ solution(1234));
