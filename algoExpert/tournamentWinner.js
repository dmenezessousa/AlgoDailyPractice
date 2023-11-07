function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scoreBoard = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++){
    const [homeTeam, awayTeam] = competitions[i];

    let matchWinner = results[i] > 0 ? homeTeam : awayTeam;
    scoreBoard[matchWinner] ? scoreBoard[matchWinner] += 3 : scoreBoard[matchWinner] = 3

    if (scoreBoard[matchWinner] > scoreBoard[currentBestTeam]) {
      currentBestTeam = matchWinner
    }
  }

  return currentBestTeam
}

console.log(tournamentWinner([["HTML","C#"],["C#","PYTHON"],["PYTHON","HTML"]],[0,0,1]))