function addDivisor(n) {
  let answer = 0;
  for(let i = 1 ; i<n+1 ; i++){
      n%i == 0 ? answer+=i : answer+=0;
  }
  
  return answer;
}

// test
console.log("결과1 : " + addDivisor(2));
console.log("결과1 : " + addDivisor(12));