function solution(s) {
  const len = s.length;
  if(len%2!==0){
      return s[parseInt(len/2)];
  }
  else{
      return s.slice((len/2)-1, (len/2)+1);
  }
}

//test
console.log("결과1 "+ solution("abcde"));
console.log("결과2 "+ solution("qwer"));

