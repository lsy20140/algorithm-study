function solution(user_id, banned_id) {
  let visited = []
  let list = []
  
  const backtrack = (idx, cnt, str) => {
      // 하나의 경우 만들어졌을 때
      if(cnt === banned_id.length) {
          let arr = str.split(",")
          arr.shift() // 첫 번째 요소 "," 제거
          arr.sort()
          let joinStr = arr.join("")
          // 중복 방지
          if(!list.includes(joinStr)){
              list.push(joinStr)
          }
      }

      for(let i = idx ; i < banned_id.length ; i++) {
          for(let j = 0 ; j < user_id.length ; j++){
              // 조건 맞지 않는 경우 더 돌아가기
              if(visited[j]) continue
              if(banned_id[i].length!==user_id[j].length) continue
              if(!isPossible(banned_id[i], user_id[j])) continue
              
              visited[j] = 1
              backtrack(i+1, cnt+1, str+","+user_id[j])
              visited[j] = 0
          }
      }
  }
  backtrack(0,0,"")
  return list.length
}

function isPossible(banned_id, user_id) {
  for(let i = 0 ; i < banned_id.length ; i++) {
      if(banned_id[i] !=="*" && (banned_id[i] !== user_id[i])) {
          return false
      }
  }
  return true
}

// test
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]))
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]))
