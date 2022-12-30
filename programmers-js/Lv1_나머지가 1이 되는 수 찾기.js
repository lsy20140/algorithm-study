function solution(n) {
  for(let i = 1; i<n ; i++){
      if(n%i == 1){
          return i;   
      }
  }

}

// test
console.log("결과1 : " + solution(10));
console.log("결과2 : " + solution(12));
