function solution(n, computers) {
  let answer = 0
  let visited = []

  for(let  i =0 ; i < n ; i++) {
      if(!visited.includes(i)){
          dfs(i, computers, visited)
          answer++
      }
  }
  return answer
  
}

   
function dfs(cur, computers, visited){
  visited.push(cur)
  for(let i = 0 ; i < computers.length ; i++) {
      if(computers[cur][i] === 1 && !visited.includes(i)){
          dfs(i, computers, visited)
      } 
  }
}

// test
console.log(solution(3, 	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3, 	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]))

