function solution(lottos, win_nums) {
  let result = [];
  
  let overlap_count = lottos.filter(x => win_nums.includes(x)).length;
  let zero_count = lottos.filter(e => 0 === e).length;
  
  result[0] = zero_count ==0 && overlap_count < 2 ? 6: 7 - (overlap_count+zero_count);
  result[1] = zero_count > 5 || overlap_count < 2 ? 6: 7 - overlap_count
  
  return result;
}


// test
console.log("결과1 : " + solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]	));
console.log("결과2 : " + solution([0, 0, 0, 0, 0, 0]	, [38, 19, 20, 40, 15, 25]	));
console.log("결과3 : " + solution([1, 2, 3, 4, 5, 6]	, [7, 8, 9, 10, 11, 12]	));