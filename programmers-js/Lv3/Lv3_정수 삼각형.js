function solution(triangle) {
  for(let i = 1 ; i < triangle.length ; i++) {
      for(let j = 0 ; j < triangle[i].length ; j++) {
          triangle[i][j] = Math.max(triangle[i-1][j-1] || 0, triangle[i-1][j] || 0) + triangle[i][j]
      }
  }
  return Math.max(...triangle[triangle.length-1])
}

console.log("test", solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))  