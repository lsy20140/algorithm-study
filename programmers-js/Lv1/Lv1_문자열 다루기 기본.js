function solution(s) {
  if(s.length === 4 || s.length === 6){
      return s.split("").every(i => !isNaN(i));
  }
  return false;
}

//test
console.log("결과1 "+ solution("a234"));
console.log("결과2 "+ solution("3e10"));