function solution(s) {
  let result = [];
  let temp=[];
  
  for(let i = 0 ; i <s.length ; i++){
      if(temp.includes(s[i])){
          let pos = temp.lastIndexOf(s[i]);
          result[i] = i-pos;
      }
      else{
          result[i] = -1;
      }
      temp[i] = s[i];
  }
  
  return result;
}

// test
console.log("결과1 : " + solution("banana"));
console.log("결과2 : " + solution("foobar"));
