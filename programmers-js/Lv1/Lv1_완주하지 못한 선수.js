function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for(let i = 0 ; i < participant.length ; i++){
      if(participant[i] !== completion[i]){
          return participant[i];
      }
  }
}


// test
console.log("결과1 : " + solution(["leo", "kiki", "eden"], ["eden", "kiki"]	));
console.log("결과2 : " + solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]	));
console.log("결과3 : " + solution(["mislav", "stanko", "mislav", "ana"]	, ["stanko", "ana", "mislav"]	));