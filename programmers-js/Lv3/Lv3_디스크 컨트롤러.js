function solution(jobs) {
  let idx = 0,
      cur = 0,
      total = 0
  let tempArr = []
  
  jobs.sort((a,b) => a[0] - b[0])
  
  while(idx < jobs.length || tempArr.length > 0){
      if(idx < jobs.length && jobs[idx][0] <= cur) {
          tempArr.push(jobs[idx])
          idx++
          continue
      }
      if(!tempArr.length) {
          cur=jobs[idx][0]
      }else{
          tempArr.sort((a,b) => a[1]-b[1])
          let first = tempArr.shift()
          cur+=first[1]
          total+=cur-first[0]
      }
  }
  return Math.floor(total/jobs.length)
  
}

// test
console.log(solution([[0, 3], [1, 9], [2, 6]]))