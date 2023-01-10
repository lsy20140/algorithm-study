function solution(nums) {
  let setNums = new Set(nums);

  return setNums.size < nums.length / 2 ? setNums.size : nums.length / 2
}


// test
console.log("결과1 : " + solution([3,1,2,3]));
console.log("결과2 : " + solution([3,3,3,2,2,4]	));