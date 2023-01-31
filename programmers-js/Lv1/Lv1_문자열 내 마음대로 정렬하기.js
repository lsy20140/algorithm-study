function solution(strings, n) {
  strings.sort((a, b) => {  // name 기준 오름차순 정렬
      if (a[n] > b[n]) return 1;
      if (a[n] < b[n]) return -1;
      if (a[n] === b[n]){
          if(a>b) return 1;
          else if(a<b) return -1;
      }
  });
  
  return strings;
}

//test
console.log("결과1 "+ solution(["sun", "bed", "car"], 1));
console.log("결과2 "+ solution(["abce", "abcd", "cdx"],2));

