function solution(clothes) {
  let hash = {}
  
  for(let i = 0 ; i < clothes.length ; i++) {
      let [name, type] = clothes[i]
      if(hash[type]){
          let temp = hash[type]
          hash[type] = temp+1
          continue
      }
      hash[type] =1
  }
  return Object.values(hash).reduce((acc, cur) => acc*(cur+1),1)-1
}

//test
console.log("결과1 "+ solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log("결과2 "+ solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	));