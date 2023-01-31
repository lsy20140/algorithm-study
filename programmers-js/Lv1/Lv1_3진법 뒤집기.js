function solution(n) {
  let temp = '';
  temp = n.toString(3);
  temp = [...temp].reverse().join('');

  return Number.parseInt(temp, 3);

}

// test
console.log("결과1 : " + solution(45));
console.log("결과2 : " + solution(125));