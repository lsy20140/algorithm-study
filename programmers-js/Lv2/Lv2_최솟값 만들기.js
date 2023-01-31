function solution(A,B){
  let answer=0;
  
  const a = A.sort((a,b) => a-b)
  const b = B.sort((a,b) => b-a)
  
  for(let i = 0 ; i < a.length ; i++){
      answer += a[i]*b[i]
  }
  
  return answer
}

// test
console.log("결과1 : " + solution([1, 4, 2],	[5, 4, 4]	));
console.log("결과2 : " + solution([1,2],	[3,4]));

