function solution(k, tangerine) {    
  let hash = new Map()
  let cnt = 0
  let sum = 0   
  
  for(let i = 0 ; i < tangerine.length ; i++) {
      hash.set(tangerine[i], hash.get(tangerine[i])+1 || 1)
  }

  let arr = [...hash]
  arr.sort((a,b) => b[1]-a[1])
   
  while(sum < k) {
      sum+=arr[cnt][1]
      cnt++
  }
  return cnt
}

//test
console.log("결과1 "+ solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log("결과2 "+ solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));