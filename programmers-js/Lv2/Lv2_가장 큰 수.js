function solution(numbers) {
  let answer = numbers.map((num) => num.toString())
                      .sort((a,b) => (b+a) - (a+b)).join("")
  
  return answer[0]==='0'? '0' : answer;
}

// test
console.log("결과1 : " + solution([3, 30, 34, 5, 9], "9534330"));
console.log("결과2 : " + solution([0, 0, 0], "0"));