function solution(s) {
  const newArr = s + s
  let count = 0;
  
  for(let i = 0 ; i < s.length ; i++){
      let sliceArr = newArr.slice(i, i + s.length)
      
      for(let j = 0 ; j < s.length ; j++){
          sliceArr = sliceArr.replaceAll('[]','').replace('()','').replace('{}','')
          if(sliceArr === '' ){
              count+=1
              break
          }
      }
  }
  return count
}


// test
console.log("결과1 : " + solution("[](){}", 3));
console.log("결과2 : " + solution("[)(]", 0));