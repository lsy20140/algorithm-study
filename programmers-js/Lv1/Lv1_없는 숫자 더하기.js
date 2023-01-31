function solution(numbers) {
  const num = [0,1,2,3,4,5,6,7,8,9];

  let filterArray = num.filter(x => !numbers.includes(x));

  let total = filterArray.reduce((a,b) => a+b);

  return total;
}

//test
console.log("결과1 "+ solution([1,2,3,4,6,7,8,0]));
console.log("결과2 "+ solution([5,8,4,0,6,7,9]));


