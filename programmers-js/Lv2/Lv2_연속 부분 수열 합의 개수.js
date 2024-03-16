function solution(elements) {
  elements = [...elements, ...elements]
  
  let set = new Set()
  
  for(let i = 0 ; i < elements.length ; i++) {
      for(let j = 1 ; j < elements.length / 2 +1 ; j++) {
          let temp = elements.slice(i, i+j)
          set.add(temp.reduce((acc, cur) => acc+cur))
      }
  }
  return set.size
}

//test
console.log("결과1 "+ solution([7,9,1,1,4]));