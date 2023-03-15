function solution(input_string) {
  let filteredArr =  [...new Set(input_string)]
  
  let diffArr= []
  let countArr = []
  let startPos=0;
  let lastPos=0;
  let result=[];
  
  for(let i = 0 ; i < filteredArr.length ; i++){
      startPos = input_string.indexOf(filteredArr[i]);
      lastPos = input_string.lastIndexOf(filteredArr[i]);
      diffArr.push(lastPos - startPos +1)
      
      let count = 0;

      for(let j = 0 ; j< input_string.length ; j++){
          if(filteredArr[i] === input_string[j]){
              count++;
              countArr[i] = count;
          }
      }
  }
  
  for(let i = 0 ; i< countArr.length ; i++){
      if(countArr[i] !== diffArr[i] ){
          result.push(filteredArr[i]);
      }
  }
  result = result.sort().join("");
  
  return result!=="" ? result : "N"
}

