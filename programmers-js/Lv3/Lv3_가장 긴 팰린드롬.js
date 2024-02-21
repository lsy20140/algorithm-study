function solution(s) {
  for(let i = s.length ; i >=1 ; i--){
      for(let j = 0 ; j <= s.length-i ; j++) {
          let temp = s.slice(j, i+j)
          if(isPalindrome(temp)) {
             return i
          }
      }
  }
}

function isPalindrome(str) {
  let center = Math.floor(str.length/2)
  for(let i = 0 ; i < center ; i++) {
      if(str[i] !== str[str.length - i - 1]){
          return false
      }
  }
  return true
}

// test
console.log(solution("abcdcba"))
console.log(solution("abacde"))