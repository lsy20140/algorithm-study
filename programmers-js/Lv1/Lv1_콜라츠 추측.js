function solution(num) {
  let count= 0;
  if(num==1){
      return 0;
  }

  while(1){
      num = divFunc(num);
      count++;

      if(num==1){
          return count;
      }
      if(count>=500){
          return -1;
      }
  }
}

function divFunc(n){
  if(n%2==0){
      n=n/2;
  }
  else if(n%2==1){
      n=n*3+1
  }

  return n;
}

//다른 방법
// function solution(num) {
//   let answer = 0;
//   while(num !=1 && answer !=500){
//       num%2==0 ? num = num/2 : num = num*3 +1;
//   answer++;
// }
//   return num == 1 ? answer : -1;
// }

//test
console.log("결과1 : " + solution(16));
console.log("결과2 : " + solution(626331));