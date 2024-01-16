function solution(n, stations, w) {
  let answer = 0
  let empty = []
  
  empty.push(stations[0]-w-1)
  empty.push(n-stations[stations.length-1]-w)
  
  for(let i = 1 ; i < stations.length ; i++) {
      empty.push(stations[i]-w-(stations[i-1]+w)-1)
  }
  for(let e of empty) {
      if(e>0){
          answer+=Math.ceil(e/(2*w+1))            
      }else{
          continue
      }
  }
  return answer
}

// test
console.log(solution(11, [4, 11], 1))

