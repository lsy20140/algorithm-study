function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0){
        return false;
    }
  }
  return true;
}

function solution(n) {
  let answer = 0;
    
  for (let i = 2; i < n+1; i++) {
    if (isPrime(i)) answer++;
  }
  return answer;
}


//test
console.log("결과1 "+ solution(10));
console.log("결과2 "+ solution(5));