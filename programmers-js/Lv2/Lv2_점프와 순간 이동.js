function solution(n)
{
    let total=0
    
    while(n > 0) {
        if(n % 2 === 0) {
            n /= 2;
        } else {
            n--;
            total++;
        }
    }
    
    return total  
}

//test
console.log("결과1 "+ solution(5));
console.log("결과2 "+ solution(6));
console.log("결과3 "+ solution(5000));