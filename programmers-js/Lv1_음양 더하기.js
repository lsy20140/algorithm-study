function solution(absolutes, signs) {
  for(let i = 0 ; i< signs.length ; i++){
      if(!signs[i]){
          absolutes[i] = -absolutes[i];
      }
  }
  let total = absolutes.reduce((a, b) => a+b);

  return total;
}

// test
console.log("결과1 : " + solution([4,7,12], [true,false,true]));
console.log("결과2 : " + solution([1,2,3], [false,false,true]	));
