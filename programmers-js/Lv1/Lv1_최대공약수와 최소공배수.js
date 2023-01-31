function solution(n, m) {
  let answer = [0,0];

  for(let i = 1 ; i < Math.min(n,m) + 1 ; i++){
      if(n%i == 0 && m%i == 0){
          answer[0] = i;
      }
  }
  answer[1] = n * m / answer[0];

  return answer;
}

//test
console.log("결과1 : " + solution(3, 12));
console.log("결과2 : " + solution(2, 5));