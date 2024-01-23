function checkMid (mid, k, stones) {
  let cnt = 0
  for(let i = 0 ; i < stones.length ; i++) {
      if(stones[i]>=mid){
          cnt = 0
      }else{
          cnt++
      }
      if(cnt>=k) return false
  }
  return true
}

function solution(stones, k) {
  let left = 1
  let right = 200000000
  
  while(left<right-1){
      let mid = parseInt((left+right)/2)
      
      if(checkMid(mid, k, stones)){
          left = mid
      }else{
          right = mid
      }
  }
  return left
}

// test
console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3))
