function solution(gems) {
  let cur = new Map()
  let gemType = new Set(gems)
  let answer = []
  
  for(let i = 0 ; i < gems.length ; i++) {
      cur.delete(gems[i])
      cur.set(gems[i], i)
      if(cur.size === gemType.size) {
          answer.push([cur.values().next().value+1, i+1])
      }
  }
  return getMin(answer)
}


function getMin(answer) {
  let sortedArr = answer.sort((a,b) => {
      if(a[1]-a[0] === b[1] - b[0]){
          return a[1] - b[1]
      }
      return a[1]-a[0] - (b[1] - b[0])
  })
  return sortedArr[0]
}

// test
console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]	))
console.log(solution(["AA", "AB", "AC", "AA", "AC"]	))

