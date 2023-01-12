function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0){
        return false;
    }
  }
  return true;
}

function solution(nums) {
    let total = 0 ; 
    let count = 0 ;
    
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j < nums.length ; j++){
            for(let k = j+1 ; k < nums.length ; k++){
                total = nums[i] + nums[j] + nums[k];
                if(isPrime(total)) count++;
            }
        }
    }
    return count;
}

//test
console.log("결과1 "+ solution([1,2,3,4]));
console.log("결과2 "+ solution([1,2,7,6,4]));