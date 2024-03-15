function solution(sequence) {
  let posArr = []
  let negArr = []
  let answer = 0

  sequence.forEach((s, i) => {
      if(i === 0) {
          posArr[i] = s
          negArr[i] = -s
      }else if(i%2 === 0){
          posArr[i] = Math.max(posArr[i-1]+s, s)
          negArr[i] = Math.max(negArr[i-1]+(-1)*s, (-1)*s)
      }else if(i%2 !== 0){
          posArr[i] = Math.max(posArr[i-1]+(-1)*s, (-1)*s)       
          negArr[i] = Math.max(negArr[i-1]+s, s)
      }
      answer = Math.max(posArr[i], negArr[i], answer)
  })
  
  return answer
}

console.log("test", solution([2, 3, -6, 1, 3, -1, 2, 4]	))