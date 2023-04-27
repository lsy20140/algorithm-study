function solution(people, limit) {
  let count = 0 
  
  people.sort((a,b) => b-a)
   
  let left = 0;
  let right = people.length - 1
  
  while(left < right+1){
      if(people[left] + people[right] < limit + 1){
          right --
      }
      count++
      left++
  }
  
  return count
}

// test
console.log("결과1 : " + solution([70, 50, 80, 50], 100));
console.log("결과2 : " + solution([70, 80, 50], 100));