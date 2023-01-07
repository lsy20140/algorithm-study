function solution(sizes) {
  let sideA = 0;
  let sideB = 0;  
  
  for(let i=0 ; i < sizes.length ; i++){
      for(let j = 0; j < 2 ; j++){
          sideA = sideA < sizes[i][j] ? sizes[i][j] : sideA;
      }
      
      let temp = Math.min(sizes[i][0], sizes[i][1]);
      sideB = temp > sideB ? temp : sideB;
  }

  return sideA * sideB;
}

//test
console.log("결과1 "+ solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log("결과2 "+ solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	));