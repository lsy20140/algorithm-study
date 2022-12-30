function solution(n) {
  const array = (n+"").split("").map((item) => Number(item));
  const sortArr = array.sort((a,b) => b-a);
  
  return parseInt(sortArr.join(""));
}

// test
console.log("결과1 : " + solution(118372));