function solution(s) {
  let stack=[]
  
  for(let i = 0 ; i< s.length ; i++){
      if(stack[stack.length-1] === s[i]) {
          stack.pop()
      }
      else {
          stack.push(s[i])
      }
  }
  return stack.length ? 0 : 1  
}


//test
console.log("결과1 "+ solution("baabaa"));
console.log("결과2 "+ solution("cdcd"));

