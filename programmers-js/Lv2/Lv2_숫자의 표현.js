function solution(n) {
  let answer = 0;
  
  for (let i = 1; i < n+1; i++) {
      if (n % i === 0 && i % 2 === 1){
          answer++;
      }
  }
  return answer;
}

// 기존 이중 for문을 통해 작성하면 효율성 test fail
//test
console.log("결과1 "+ solution(15));
