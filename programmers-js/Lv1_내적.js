function solution(a, b) {
  return a.reduce((acc, cur, i) => acc+cur*b[i], 0);
}

// test
console.log("결과1: "+ solution([1,2,3,4], [-3,-1,0,2]));
console.log("결과2: "+ solution([-1,0,1], [1,0,-1]	));