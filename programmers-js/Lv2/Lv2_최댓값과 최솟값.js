function solution(s) {
  const array = s.split(' ').map(x => parseInt(x))
  
  return Math.min(...array) + " " + Math.max(...array)
}

//test
console.log("결과1 "+ solution("1 2 3 4"));
console.log("결과2 "+ solution("-1 -2 -3 -4"));