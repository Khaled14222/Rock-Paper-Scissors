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
  console.log(cpu)
  return cpuChoice;
}

 function getHumanChoice(){
 let choice = prompt("What's your choice?: ")
 choice = choice.toLowerCase();
 console.log(choice)
 return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(ch,cp){
  if(ch === cp){
    let results = `it\'s a draw, you picked ${ch}, and the computer picked ${cp}`;
    console.log (results);
  }
}


let ComCh = getComputerChoice();
let HumCh = getHumanChoice();
playRound(HumCh, ComCh);