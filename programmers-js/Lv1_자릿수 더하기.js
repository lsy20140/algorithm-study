function solution(n)
{
    if(n.toString().length === 1) return n;

    let split = [...n.toString()];
    let result = split.reduce((a,b) => Number(a)+Number(b));

    return result;
}

// test
console.log("결과1 : " + solution(123));
console.log("결과2 : " + solution(987));

