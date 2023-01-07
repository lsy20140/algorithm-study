function solution(s, n) {
  let result=''

  for(let i = 0 ; i<s.length ; i++){
      let ascii = s.charCodeAt(i);

      if(ascii >= 97 && ascii <=122){
          ascii+=n;
          if(ascii > 122){
              ascii-=26;
          }
      }
      else if(ascii >=65 && ascii <= 90){
          ascii+=n;
          if(ascii > 90){
              ascii-=26;
          }
      }
      result+=String.fromCharCode(ascii);
  }
  return result;
}

//test
console.log("결과1 "+ solution("AB", 1));
console.log("결과2 "+ solution("z", 1));
console.log("결과3 "+ solution("a B z", 4));

