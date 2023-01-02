function solution(arr, divisor) {
  let filterArray = arr.filter((data) => 
      data % divisor === 0
  )

  return !filterArray.length ? [-1] : filterArray.sort((a,b)=>a-b);
}

// test
console.log("결과1 : " + solution([5, 9, 7, 10]	, 5));
console.log("결과2 : " + solution([3,2,6], 10));