// function evenOrOdd(num) {
//   return num % 2 == 0 ? "Even" : "Odd";
// }

// true->1, false->0 이용
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

//test
console.log("결과1 : " + evenOrOdd(2));
console.log("결과2 : " + evenOrOdd(5));