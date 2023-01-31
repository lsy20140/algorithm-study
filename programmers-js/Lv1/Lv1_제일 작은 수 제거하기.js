function solution(arr) {
  const minValue = Math.min(...arr);
  
  let filterArr = arr.filter(function(data) {
      return data!==minValue
  });
  return arr.length !==1 ? filterArr : [-1];
}

// test
console.log(solution([4,3,2,1]));
console.log(solution([10]));