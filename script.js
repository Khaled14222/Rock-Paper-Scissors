function getComputerChoice(){
  let cpu = Math.random();
  let cpuChoice
  if(cpu <= 0.3){
     cpuChoice = "rock";
  } else if (cpu <= 0.6 && cpu > 0.3){
     cpuChoice = "paper"
  } else if (cpu <= 1 && cpu > 0.6){
    cpuChoice = "scissors"
  }


  return cpuChoice;
  console.log(cpuChoice);
  console.log(cpu)
}

function getHumanChoice(){
 let choice = prompt("What's your choice?: ")
 choice = choice.toUpperCase();
 console.log(choice)
 return choice;
}
let humanScore = 0;
let computerScore = 0;

getHumanChoice();
getComputerChoice()