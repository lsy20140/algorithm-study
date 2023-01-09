function solution(s) {
  const words = {
      zero : 0,
      one : 1,
      two : 2,
      three : 3,
      four : 4,
      five : 5,
      six : 6,
      seven : 7,
      eight : 8,
      nine : 9
  }

  for(let i = 0 ; i<10 ; i++){
      s = s.replaceAll(Object.keys(words)[i], words[Object.keys(words)[i]]);
  }

  return Number(s);

}   

//test
console.log("결과1 "+ solution("one4seveneight"	));
console.log("결과2 "+ solution("23four5six7"));
console.log("결과3 "+ solution("2three45sixseven"	));
console.log("결과4 "+ solution("oneoneoneone"));