function solution(seoul) {
  const idx = seoul.findIndex(i => i=='Kim');
  // const idx = seoul.indexOf('Kim');
  
  return ("김서방은 " + idx + "에 있다"); 
}

//test
console.log("결과1 "+ solution(["Jane", "Kim"]));