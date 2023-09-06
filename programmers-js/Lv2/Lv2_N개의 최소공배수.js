function solution(arr) {
  // 최소공배수 = 두 수의 곱 / 최대공약수
  return arr.reduce((a,b) => (a * b) / getGcd(a, b));
}

function getGcd(a, b) {
  if(b === 0) return a;
  
  return getGcd(b, a%b);
  
}

// test
console.log("결과1 : " + solution([2,6,8,14]));
console.log("결과2 : " + solution([1,2,3]));