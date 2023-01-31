function solution(n) {
  let str=''
  for(let i = 0 ; i <n ; i++){
      if(i%2===0){
          str= str+'수';
      }
      else{
          str = str+'박';
      }
  }
  return str;

}


// const waterMelon = n => {
//   return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
// }


//test
console.log("결과1 "+ solution(3));
console.log("결과2 "+ solution(4));

