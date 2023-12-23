function solution(n, s) {
  let array=[]
  if(n > s) {
      return [-1]
  }
  
  for(let i = n ; i> 0 ; i--) {
      let temp = Math.floor(s/i)
      array.push(temp)
      s=s-temp
  }
  return array
}

// test
console.log(solution(2, 9))
console.log(solution(2, 1))
