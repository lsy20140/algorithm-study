function solution(maps) {
  const dirX = [0,0,1,-1];
  const dirY = [1,-1,0,0];
  const queue = [[0,0,1]];
  
  const [n,m] = [maps.length, maps[0].length]

  while ( queue.length ) {
      const cur = queue.shift();
      if ( cur[0] === maps.length - 1 && cur[1] === maps[0].length - 1) 
          return cur[2]
      for(let i = 0 ; i < 4 ; i += 1){
          const moveY = cur[0] + dirY[i]
          const moveX = cur[1] + dirX[i]
          if(moveX >= 0 && moveY >= 0 && moveX < m && moveY < n && maps[moveY][moveX] === 1 ) {
              maps[moveY][moveX] = 0;
              queue.push([moveY, moveX, cur[2] + 1]);    
          }
      }
  }
  return -1
}

// test
console.log("결과1 : " + solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log("결과2 : " + solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));

