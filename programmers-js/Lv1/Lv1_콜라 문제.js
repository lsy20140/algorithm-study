function solution(a, b, n) {
  let result = 0
  while(n+1 > a) {
      result += Math.floor(n / a)*b;
      n = Math.floor(n / a)*b + n % a;
  }
  return result;
}

//test
console.log("결과1 : " + solution(2, 1, 20));
console.log("결과2 : " + solution(3, 1, 20));

