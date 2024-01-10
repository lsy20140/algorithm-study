function solution(A, B) {
  let score = 0
  let i = 0
  let j = 0
  
  A.sort((a,b) => b-a)
  B.sort((a,b) => b-a)
  
  while(i<A.length) {
      if(A[i] < B[j]) {
          i++
          j++
          score+=1
      }else{
          i++
          continue
      }
  }
  return score
}

// test
console.log(solution([5,1,3,7], [2,2,6,8]))
console.log(solution([2,2,2,2], [1,1,1,1]))

