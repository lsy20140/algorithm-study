function solution(x, n) {
  let array=[];
  let a = 0;
  while(n--){
      a+=x;
      array.push(a);
  }
  return array;
}

//test
console.log("결과1: " + solution(2,5));
console.log("결과2: " + solution(-4,2));