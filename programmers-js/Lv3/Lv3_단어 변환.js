function solution(begin, target, words) {
  let answer = 0;
  let visited = []
  let queue = [[begin, 0]]
  
  if(!words.includes(target)) return 0
  
  while(queue.length) {
      let [word, count] = queue.shift()
      if(word === target){
          answer = count
      }
      
      words.forEach((v) => {
          if(!visited.includes(v)){
              if(checkOneDiff(v, word)){
                  queue.push([v, count+1])
                  visited.push(v)                    
              }
          } 
      })
  }
  
  return answer
}

function checkOneDiff(w1, w2) {
  let count = 0
  for(let i = 0 ; i < w1.length ; i++) {
      if(w1[i] !== w2[i]) {
          count++
      }
  }
  return count===1
}

// test
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]	))
