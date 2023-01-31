function solution(a, b) {
  const days = ["THU", "FRI","SAT", "SUN", "MON", "TUE","WED"];
  const daysCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  let temp = 0;
  for(let i = 0; i< a-1;i++){
      temp +=daysCount[i]
  }
  
  return days[(temp+b) % 7];

}

//test
console.log("결과1 "+ solution(5, 24));
console.log("결과2 "+ solution(3, 10));
console.log("결과3 "+ solution(1, 29));