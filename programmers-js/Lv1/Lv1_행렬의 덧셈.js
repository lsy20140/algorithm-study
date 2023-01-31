function solution(arr1, arr2) {
  let result = Array.from(new Array(arr1.length), () => new Array(arr1[0].length).fill(0));

  for(let i = 0 ; i < arr1.length ; i ++){
      for(let j = 0 ; j < arr1[0].length ; j++){
          result[i][j] = arr1[i][j] + arr2[i][j];

      }
  }
  return result;

}

// test
console.log("결과1 : " + solution([[1, 2, 3, 4], [4, 5, 6, 7], [1, 2, 3, 3]], [[3, 2, 1, 5], [6, 5, 4, 9], [4, 5, 6, 7]]));

