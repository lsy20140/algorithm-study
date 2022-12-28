function solution(n) {
  let sqrt = Math.sqrt(n);

  return sqrt % 1 !== 0 ? -1 : Math.pow((sqrt+1), 2);
}

// test
console.log("결과1: "+ solution(121));
console.log("결과2: "+ solution(3));