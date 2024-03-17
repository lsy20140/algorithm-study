// 1차 시도 메모리 초과

// function solution(n, left, right) {
//   let arr = Array.from(Array(n), ()=> [])
  
//   for(let i = 0 ; i < n ; i++) {
//       for(let j = 0 ; j < n ; j++) {
//           arr[i][j] = Math.max(i,j)+1
//       } 
//   }
  
//   let answer = arr.flat().splice(left, right-left+1)
  
//   return answer
// }

// 정답 코드 -> 배열의 각 요소를 모두 채운 후 잘라 반환하는 것이 아니라 left, right 값을 시작으로 해당 인덱스에 맞는 값을 구하여 배열에 삽입하는 방향
function solution(n, left, right) {
  let answer = []
  let arr = [Math.floor(left/n), left%n]
  
  for(let i = 0 ; i < right-left+1 ; i++ ) {
      answer.push(Math.max(arr[0], arr[1])+1)
      if(arr[1] === n-1){
          arr[0]+=1
          arr[1] = 0
          continue
      }
      if(arr[0] === n-1 && arr[1] == n-1) {
          break
      }
      arr[1]+=1
  }
  return answer
}

// test
console.log("test", solution(3,2,5))
