function solution(s) {
  let answer = [];
  let temp = 0;

  for(let i = 0 ; i<s.length ; i++){
      if(s[i]===" "){
          temp = 0;
          answer[i]=" ";
          continue;
      }
      temp%2==0 ? answer[i] = s[i].toUpperCase() : answer[i] = s[i].toLowerCase();

      temp++;
  }

  return answer.join("");
}

// test
console.log("결과1 : " + solution("try hello world"	));
console.log("결과2 : " + solution("hi my"));
