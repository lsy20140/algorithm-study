function solution(dartResult) {
  let arr= [];
  let num=0;
  let score=0;

  for(let i = 0 ; i < dartResult.length ; i++){
      if(dartResult[i] >=0 && dartResult[i] <= 9){
          if(dartResult[i]==1 && dartResult[i+1]==0){
              num = 10;
              i++;
              continue
          }
          num = dartResult[i];
      }
      if(dartResult[i] === 'S'){
          arr.push(num**1);
      }
      else if(dartResult[i] === 'D'){
          arr.push(num**2);
      }
      else if(dartResult[i] === 'T'){
          arr.push(num**3);
      }
      else if(dartResult[i] === '#'){
          arr[arr.length-1] *= -1;
      }
      else if(dartResult[i] === '*'){
          arr[arr.length-1] *= 2;
          arr[arr.length-2] *= 2;
      }
  }
  for(let i = 0 ; i < arr.length ; i++){
      score += arr[i]
  }   
  return score;
}


//test
console.log("결과1 "+ solution("1S2D*3T"));
console.log("결과2 "+ solution("1D2S#10S"));
console.log("결과3 "+ solution("#1D2S0T"));