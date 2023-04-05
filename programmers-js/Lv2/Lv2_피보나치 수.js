function solution(n) {
  let array = [0, 1]    

  for(let i = 2 ; i < n + 1 ; i++) {
      array.push((array[i - 2] + array[i - 1]) % 1234567)
  }
  
  return array[n]
}

// for문에서 1234567을 나눠준 후 push 해야 n이 많이 커졌을 때 자료형의 범위를 넘어가지 않음

// test
console.log("결과1 : " + solution(3));
console.log("결과2 : " + solution(5));