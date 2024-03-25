function solution(n, edge) {
  const nodes = Array.from(Array(n), () => [])
  
  for(const e of edge) {
  nodes[e[0]-1].push(e[1]-1);
  nodes[e[1]-1].push(e[0]-1);
  }

  let queue = [0]
  let visited = [1]
  while(queue.length>0) {
      let cur = queue.shift()
      for(let i = 0 ; i < nodes[cur].length ; i++) {
          if(!visited[nodes[cur][i]]){
              queue.push(nodes[cur][i])
              visited[nodes[cur][i]] = visited[cur]+1
          }
      }
  }
  const max = Math.max(...visited)
  return visited.filter((v) => v === max).length
}

// test
console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	))


