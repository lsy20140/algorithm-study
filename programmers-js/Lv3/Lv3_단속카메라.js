function solution(routes) {
  let count = 1
  routes.sort((a,b) => a[1] - b[1])
  let camera = routes[0][1]
  
  for(let i = 1 ; i < routes.length ; i++) {
      if(routes[i][0] >camera) {
          count++
          camera = routes[i][1]
      }
  }
  return count
}

// test
console.log(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]))
