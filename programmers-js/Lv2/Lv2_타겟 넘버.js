function solution(numbers, target) {
  let answer= 0
  
  dfs(0, 0)
  
  function dfs(idx, sum){
      if(idx === numbers.length){
          if(sum === target){
              answer++
          }
          return
      }
      
      dfs(idx+1, sum+numbers[idx])
      dfs(idx+1, sum-numbers[idx])
  }
  return answer
}


// test
console.log("결과1 : " + solution([1, 1, 1, 1, 1], 3));
console.log("결과2 : " + solution([4, 1, 2, 1], 4));

