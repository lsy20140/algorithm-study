function solution(k, m, score) {
  let result = 0;
  
  score = score.sort((a,b) => b-a)
  
  for(let i = 0 ; i < score.length; i += m){
      let temp = score.slice(i, i+m);
      if(temp.length < m){
          break;
      }
      result += Math.min(...temp) * m;
  }
  return result;
}

// test
console.log("결과1 : " + solution(3, 4, [1, 2, 3, 1, 2, 3, 1]	));
console.log("결과2 : " + solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	));