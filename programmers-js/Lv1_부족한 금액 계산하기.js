function solution(price, money, count) {
  let needMoney = 0;

  for(let i = 1 ; i < count+1 ; i ++){
      needMoney += price*i;
  }

  return needMoney>money ? needMoney-money : 0;
}

//test
console.log("결과1 "+ solution(3, 20, 4, 10));
