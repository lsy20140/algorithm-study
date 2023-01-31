function solution(s) {
  let result = '';
  s=s.toLowerCase();
  
  for(let i = 0 ; i < s.length ; i++){
      if(i === 0 || s[i-1] === ' '){
          result+=s[i].toUpperCase();
          continue;
      }
      result+=s[i]
  }
  return result;
}

// test
console.log("결과1 : " + solution("3people unFollowed me"));
console.log("결과2 : " + solution("for the last week"));