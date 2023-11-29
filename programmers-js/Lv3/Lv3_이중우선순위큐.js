function solution(operations) {
  let queue = []
  
  for(let i = 0 ; i < operations.length ; i++) {   
      let command = operations[i].slice(0,1)
      let data = parseInt(operations[i].split(" ").pop())        
      
      if(command === 'I') {
          queue.push(data)
      }
      else if(command === 'D'){
          if(data === 1){
              queue = removeMax(queue)
              continue
          }
          queue = removeMin(queue)
      }
  }
  
  if(queue.length > 0) {
      return [Math.max(...queue), Math.min(...queue)]
  }
  return [0,0]
}

function removeMax(queue) {
  return queue.filter((data) => data !== Math.max(...queue) )
}


function removeMin(queue) {
  return queue.filter((data) => data !== Math.min(...queue) )
}

//test
console.log("test1", solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]))
console.log("test2", solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]))