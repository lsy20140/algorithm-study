function solution(tickets) {
  const answer = []
  
  dfs("ICN", tickets, [])
  
  function dfs(start, tickets, path) {
      let newPath = [...path, start]
      
      if(tickets.length === 0){
          answer.push(newPath)
      }else{
          for(let i = 0 ; i < tickets.length ; i++){
              if(tickets[i][0] === start){
                  let copiedTickets = [...tickets]
                  copiedTickets.splice(i, 1)
                  dfs(tickets[i][1], copiedTickets, newPath)
              }
          }
      }
  }
  return answer.sort()[0]
  
}

//test
console.log("test1", solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]))
console.log("test2", solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]))