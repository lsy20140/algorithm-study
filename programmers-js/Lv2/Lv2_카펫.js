function solution(brown, yellow) {
  let count = brown+yellow
  
  for(let h = 3 ; h<=brown/2 ; h++){
      if(count%h === 0) {
          let w = count/h
          
          if((w-2)*(h-2) === yellow){
              return [w, h]
          }
      }
  }
}

// test
console.log("결과1 : " + solution(10,2));
console.log("결과2 : " + solution(8,1));
console.log("결과3 : " + solution(24,24));