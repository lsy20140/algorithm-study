//replaceAt 함수 정의
String.prototype.replaceAt=function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length); 
}

function solution(phone_number) {
  for(let i = 0 ; i<phone_number.length-4 ; i ++){
      phone_number = phone_number.replaceAt(i, '*');
  }

  return phone_number;

}


// 정규식
// function hide_numbers(s) {
//   return s.replace(/\d(?=\d{4})/g, "*");
// }

// fill 함수
// const solution = n => [...n].fill("*",0,n.length-4).join("")


// test
console.log("결과1 : " + solution("01033334444"));
console.log("결과2 : " + solution("027778888"));