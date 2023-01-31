function solution(numbers) {
  let result = [];
  
  for(let i = 0 ; i < numbers.length ; i++){
      for(let j = i+1 ; j < numbers.length ; j++){
          let temp = numbers[i]+numbers[j]
          if(result.indexOf(temp) === -1){
              result.push(temp);
          }
      }
  }
  return result.sort((a,b) => a-b); 
  
}


//test
console.log("결과1 "+ solution([2,1,3,4,1]));
console.log("결과2 "+ solution([5,0,2,7]));