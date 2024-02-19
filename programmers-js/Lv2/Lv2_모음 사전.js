function solution(word) {
  const vowels= ['A', 'E', 'I', 'O', 'U']
  let arr = {}
  let idx = 0
  
  dfs("", 0)
  function dfs(word, size) {
      if(size > 5){
          return 
      }
      arr[word] = idx++
      for(let i = 0 ; i < 5 ; i++) {
          dfs(word+vowels[i], size+1)
      }
  }
  return arr[word]
}

//test
console.log("결과1 "+ solution("AAAAE"));
console.log("결과2 "+ solution("EIO"));