function solution(n, roads, sources, destination) {
  let answer = []
  const roadArr = Array.from({length : n + 1}, () => []);
  
  roads.forEach(([a,b]) => {
      roadArr[a].push(b)
      roadArr[b].push(a)
  })

  let queue = [destination]
  const count = Array.from({length: n+1}, () => -1)
  count[destination] = 0
  
  while(queue.length) {
      let cur = queue.shift()
      
      for(const next of roadArr[cur]) {
          if(count[next] === -1){
              queue.push(next)
              count[next] = count[cur]+1
          }
      }
  }
  for (const s of sources){
      answer.push(count[s])
  };

  return answer
}

// test
console.log(solution(3, [[1, 2], [2, 3]], [2,3], 1))
console.log(solution(5, [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]], [1,3,5], 5))