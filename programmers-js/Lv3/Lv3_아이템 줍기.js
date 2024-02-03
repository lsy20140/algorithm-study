function solution(rectangle, characterX, characterY, itemX, itemY) {
  // 굵은 선의 일부가 되는!! 테두리에 있는 경우
  // 다른 도형 어딘가 안에 포함되는 경우
  
  let dirX = [0.5,-0.5,0,0]
  let dirY = [0, 0, -0.5, 0.5]
  let visited = [[characterX, characterY]]
  let queue = [[characterX, characterY, 0]]
  let answer =0
  
  bfs()  
  
  function bfs() {
      while(queue.length){
          const [curX, curY, count] = queue.shift()
          if(curX === itemX && curY === itemY) {
              answer = count/2
              break
          }
          
          for(let i = 0 ; i < 4 ; i++){
              const [moveX, moveY] = [curX+dirX[i], curY+dirY[i]]                
              if(!visitedFunc(visited, moveX, moveY) && isOutsideLine(rectangle, moveX, moveY)){
                  visited.push([moveX, moveY])
                  queue.push([moveX, moveY, count+1])
              }

          }
      }
  }
  return answer
  
}
function visitedFunc(visited, x, y) {
  for(let i = 0 ; i < visited.length ; i ++){
      if(visited[i][0] === x && visited[i][1] === y) return true
  }
  return false
}

function isOutsideLine(rectangle, x, y) {
  for(let i = 0 ; i < rectangle.length ; i++) {
      if(x >= rectangle[i][0] && x <= rectangle[i][2] && y >= rectangle[i][1] && y <= rectangle[i][3] &&
        !isInsideRect(rectangle, x, y)){
          return true
      }
  }
  return false
}

  
function isInsideRect(rectangle, x, y){
  for(let i = 0 ; i < rectangle.length ; i++) {
      if(x > rectangle[i][0] && x < rectangle[i][2] && y > rectangle[i][1] && y < rectangle[i][3]){
          return true
      }
  }
  return false
}

// test
console.log(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8))
