function solution(left, right) {
  let total = 0;
  let count = 0;

  for(let i=left; i<right+1; i++){
       for(let j=1; j<i+1; j++){
           if(i%j === 0 ){
               count += 1;
           }
      }
      if(count % 2 === 0){
          total += i;
      }else{
          total -= i;
      }
      count =0;
  }
  return total;
}

//test
console.log("결과1 "+ solution(13, 17));
console.log("결과2 "+ solution(24, 27));