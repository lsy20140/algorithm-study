function solution(n) {
  let result = n+1
  while(1) {
      if(getCount(result) === getCount(n)) return result
      result++
  }
}

function getCount(n) {
  const temp = n.toString(2)
  const count = temp.split('1').length - 1;
  
  return count
}


//test
console.log("결과1 "+ solution(78));
console.log("결과2 "+ solution(15));
