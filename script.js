function getComputerChoice(){
  let cpu = Math.random();
  let cpuChoice
  if(cpu <= 0.33){
     cpuChoice = "ROCK";
  } else if (cpu <= 0.66 && cpu > 0.33){
     cpuChoice = "PAPER"
  } else if (cpu <= 1 && cpu > 0.66){
    cpuChoice = "SCISSORS"
  }
  
  console.log(cpuChoice);
  return cpuChoice;
}

 function getHumanChoice(){
 let choice = prompt("What's your choice?: ")
 choice = choice.toUpperCase();
 console.log(choice)
 return choice;
}





function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  for(let i=0;i <5;i++){

    function playRound(ch,cp){
      let results
      let scores

      if(ch === "SCISSORS" && cp === "PAPER" || ch === "PAPER" && cp === "ROCK" || ch === "ROCK" && cp === "SCISSORS"){
        humanScore++;
        results = `you picked ${ch}, Computer picked ${cp}, you win!`
        scores = `your score: ${humanScore}, the Computer score: ${computerScore}`
        console.log (results);
        console.log(scores);
      } 
      else if (ch === "ROCK" && cp === "PAPER" || ch === "PAPER" && cp === "SCISSORS" || ch === "SCISSORS" && cp === "ROCK"){
        computerScore++;
        results = `you picked ${ch}, Computer picked ${cp}, you lost!`
        scores = `your score: ${humanScore}, the Computer score: ${computerScore}`
        console.log (results);
        console.log(scores);
      }
      else{
        results = `it\'s a draw, you picked ${ch}, and the computer picked ${cp}`;
        scores = `your score: ${humanScore}, the Computer score: ${computerScore}`
        console.log (results);
        console.log(scores);
      }
    }
  let ComCh = getComputerChoice();
  let HumCh = getHumanChoice();  
  playRound(HumCh, ComCh);
  }
  
  if(humanScore > computerScore){
    console.log("You've WON!")
  } else if(humanScore == computerScore) {
    console.log("It's a draw!")
  } else (
    console.log("the game is over! you LOST!!")
  )
} 


playGame();