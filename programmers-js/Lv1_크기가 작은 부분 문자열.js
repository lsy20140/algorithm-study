function solution(t, p) {
  const len = p.length;
  
  let count = 0 ;
  for(let i = 0 ; i < t.length-len +1 ; i++){
      if(parseInt(t.substr(i,len)) <= parseInt(p)){
          count++;
      }
  }
  return count;
}

//test
console.log("결과1 "+ solution("3141592", "271"));
console.log("결과2 "+ solution("500220839878", "7"));