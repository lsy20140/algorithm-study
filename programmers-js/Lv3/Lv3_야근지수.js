function solution(n, works) {
  let sum = 0
      
  works.sort((a,b) => b-a)
  
  while(n !== 0) {
      const max = works[0]
      
      if(max === 0) return 0
      
      for(let i = 0 ; i < works.length ; i++) {
          if(works[i] >=max) {
              works[i] = works[i]-1
              n--
          }
          
          if(n === 0) {
              break
          }
      }
  }
  for(let i = 0 ; i < works.length ; i++) {
      sum+=works[i]**2
  }
  return sum
}

// test
console.log(solution(4, [4, 3, 3]))
console.log(solution(1, [2,1,2]))