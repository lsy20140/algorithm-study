function solution(array, commands) {
  let result = [];

  for(let i = 0 ; i< commands.length ; i++){
      let temp=[];
      temp = array.slice(commands[i][0]-1, commands[i][1])  
      temp.sort((a,b) => a-b);
      result[i]= temp[commands[i][2]-1];
  }
  return result;
}

// + map 사용!

//test
console.log("결과1 "+ solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	));
