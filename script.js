function getComputerChoice(){
  let cpu = Math.random();
  let cpuChoice
  if(cpu <= 0.3){
     cpuChoice = "ROCK";
  } else if (cpu <= 0.6 && cpu > 0.3){
     cpuChoice = "PAPER"
  } else if (cpu <= 1 && cpu > 0.6){
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

let humanScore = 0;
let computerScore = 0;

function playRound(ch,cp){
  let results
  let scores

  if(ch === "SCISSORS" && cp === "PAPER" || ch === "PAPER" && cp === "ROCK" || ch === "ROCK" && cp === "SCISSORS"){
    results = `you picked ${ch}, Computer picked ${cp}, you win!`
    humanScore++;
    console.log (results);
    console.log(scores);

  } else if (ch === "ROCK" && cp === "PAPER" || ch === "PAPER" && cp === "SCISSORS" || ch === "SCISSORS" && cp === "ROCK"){
    results = `you picked ${ch}, Computer picked ${cp}, you lost!`
    console.log (results);
    computerScore++;
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