function solution(s){
  s=s.toUpperCase();

  let countP = 0;
  let countY = 0;

  for(let i = 0 ; i<s.length ; i++){
      if(s[i]==='P'){
          countP++;
      }
      if(s[i]==='Y'){
          countY++;
      }
  }
  return countP===countY ? true : false;

}


// function solution(s){

//     return [...s.toLowerCase()].reduce((acc, cur) => {
//         if(cur ==='p') return acc + 1;
//         else if(cur ==='y') return acc - 1;
//         return acc;
//     }, 0) ? false : true;
// }


// test
console.log("결과: "+ solution("Ppyyyss"));