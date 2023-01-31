function solution(d, budget) {
  d.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; result <= budget; i++) {
      if (result + d[i] <= budget) {
          result += d[i];
          continue;
      }

      return i;
  }
}


// function solution(d, budget) {
//   d.sort((a,b) => a-b);
//   return d.reduce((count, price) => {
//     return count+((budget -= price) >= 0);
//   },0)
// }

//test
console.log("결과1 "+ solution([1, 111, 4, 222, 10, 3],9));
console.log("결과2 "+ solution([2,2,3,3],10));

