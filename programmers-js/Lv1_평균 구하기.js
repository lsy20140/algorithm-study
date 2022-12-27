function solution(array){
  return array.reduce((a,b) => a+b) / array.length;
}

// test
var testArr = [1,3,11];
console.log(solution(testArr));