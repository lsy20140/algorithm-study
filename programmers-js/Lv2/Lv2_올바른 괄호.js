function solution(s){
    let stack = 0;
    for (const char of s) {

        char === '(' ? stack++ : stack--;
        if (stack < 0) {
            return false;
        }
    }
    return !stack;
}

//test
console.log("결과1 "+ solution("()()"));
console.log("결과2 "+ solution(")()("));

// 기존 시도 방식 -> ()부분 replace 함수 통해 ''로 치환한 후 재귀함수 이용해 판단.. 효율성 검사 실패