function solution(genres, plays) {
  let answer = []
  let table = []
  let genreSum = {}
  
  for(let i = 0 ; i < genres.length ; i++) {
      let temp = {genre: genres[i], idx: i, playCnt: plays[i]}
      table.push(temp)
      genreSum[genres[i]] = genreSum[genres[i]] ? + genreSum[genres[i]]+plays[i] : plays[i]
  }
  genreSum = Object.fromEntries(
      Object.entries(genreSum).sort(([,a], [,b]) => a>b ? -1:1)
  )

  table.sort((a,b)=> a.playCnt - b.playCnt || b.idx - a.idx)
  table.sort((a,b) => a.genre > b.genre ? 1 : -1)

  for(let i in genreSum) {
      let index = table.findIndex(v => v.genre === i)
      answer.push(table[index].idx)
      if((index+1 < table.length) && table[index+1].genre === i) {
          answer.push(table[index+1].idx)
      }        
  }
  return answer
}


// test
console.log(solution(["classic", "pop", "pop", "pop", "pop"], [1, 2, 3, 4, 5]))
console.log(solution(	["classic", "pop", "classic", "classic", "pop"], [500, 600, 800, 800, 2500]))