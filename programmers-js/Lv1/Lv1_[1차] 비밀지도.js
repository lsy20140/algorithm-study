function solution(n, arr1, arr2) {
  let result = [];

  for (let i = 0 ; i< n ; i++){
      let temp=''
      for(let j = 0 ; j < n ; j++){
          if(toBinary(n, arr1)[i][j] === '0' && toBinary(n, arr2)[i][j] === '0'){
              temp+=' ';
              continue;
          }
          temp+= '#';
      }
      result[i]  = temp;
  }
  return result;
}

const toBinary = (n, arr) => {
  for(let i = 0 ; i <n ; i++){
      arr[i] = arr[i].toString(2).padStart(n, '0');
  }

  return arr;
}

// test
console.log("결과1 : " + solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log("결과2 : " + solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));


