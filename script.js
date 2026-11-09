let humanScore = 0;
let computerScore = 0;

//Create new html to show the results//

let res = document.createElement('p');
let InfoDown = document.querySelector(".Info");

res.textContent = `The player score:${humanScore}, The cpu score is:${computerScore}`;
InfoDown.appendChild(res);

//**First get the player input and then pass the value to comparison */
const buttons = document.querySelectorAll('.myBtn');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.value; 
    getHumanChoice(value);
    const cpuChoice = getComputerChoice();
    
    playRound(value, cpuChoice);
    return value;
  });
});

function getHumanChoice(choice){
  choice = choice.toUpperCase();
  return choice;
}

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

return cpuChoice;
}



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


  res.textContent = `The player score:${humanScore}, The cpu score is:${computerScore}`;
}
