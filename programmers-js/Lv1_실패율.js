function solution(N, stages) {

  let ratios = {};
  let result = [];

  for(let i = 1 ; i < N+1 ; i++){
      let failPlayers = stages.filter(element => i === element).length;
      let arrivePlayers = stages.filter(element => i <= element).length;

      let failRatio = failPlayers / arrivePlayers
      ratios[i] = failRatio;
  }

  for (let number in ratios) {
    result.push([number, ratios[number]]);
  }
  result.sort(function(a, b) {
    return b[1] - a[1];
  });

  for(let i = 0 ; i < Object.keys(result).length ; i++){
      result[i] = parseInt(result[i][0]);
  }
  return result;

}


//test
console.log("결과1 "+ solution(5, [2, 1, 2, 6, 2, 4, 3, 3]	));
console.log("결과2 "+ solution(4, [4,4,4,4,4]));
