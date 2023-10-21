function solution(want, number, discount) {
  const count =  number.reduce((a, b) => a+b)
  let result = 0
  
  for(let i = 0 ; i < discount.length - count + 1 ; i++) {
      let slice_discount = discount.slice(i, i+count) 
      for(let j = 0 ; j < want.length ; j++){
          let itemCnt = slice_discount.filter((item) => item === want[j]).length

          if(itemCnt < number[j]) {
              break
          }else {
              if(j === want.length-1){
                  result +=1
              }
          }
      }
  }
  
  return result
}

// test
console.log("결과1 : " + solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]));
