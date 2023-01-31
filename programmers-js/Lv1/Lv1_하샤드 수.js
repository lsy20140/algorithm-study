function solution(x) {
  let result = [...x.toString()].reduce((a,b) => Number(a)+Number(b));

  return x%result ? false : true;
}

// test
console.log("결과1 : " + solution(11));
console.log("결과2 : " + solution(12));
