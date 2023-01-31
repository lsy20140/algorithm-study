function solution(n, lost, reserve) {
  let clothNum = Array(n).fill(1);
      
  lost.map((lost) => {clothNum[lost-1] = 0;})
  reserve.map((reserve) => {clothNum[reserve-1]++})
  
  for(let i = 0 ; i< n ; i++){
      if(clothNum[i] === 0 && clothNum[i-1] ===2){
          clothNum[i] = 1;
          clothNum[i-1] = 1;
      }
      else if(clothNum[i] === 0 && clothNum[i+1] === 2){
          clothNum[i] = 1;
          clothNum[i+1]=1;
      }
  }
  
  return clothNum.filter(i => i>0).length; 
}

// test
console.log("결과1 : " + solution(5,	[2, 4],	[1, 3, 5]	));
console.log("결과2 : " + solution(5,	[2, 4],	[3]	));