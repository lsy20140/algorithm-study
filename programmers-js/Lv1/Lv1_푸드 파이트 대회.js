function solution(food) {
  let result = ''
  for(let i=1 ; i < food.length ; i++){
      if(food[i] === 1){
          continue;
      }
      result+=(i+"").repeat(food[i]/2);
  }
  return result+"0"+([...result].reverse()).join("");
}

//test
console.log("결과1 "+ solution([1, 3, 4, 6]	));
console.log("결과2 "+ solution([1, 7, 1, 2]));