function solution(n, words) {
  let array = []
  let result =[0,0]
  
  for(let i = 0 ; i <  words.length ; i++) {
      if(checkFunc(words[i], array)){
          array.push(words[i])
      }
      else{
          result[0] = i%n + 1
          result[1] = parseInt(i/n) + 1
          break
      }
  }  
  return result
}

function checkFunc(word, array) {
  if(word.length === 1) return 0
  if(array.includes(word)) return 0
  if(array.length && (word[0] !== array[array.length-1].slice(-1))) return 0
  
  return 1
}

//test
console.log("결과1 "+ solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log("결과2 "+ solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));

