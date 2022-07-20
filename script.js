let playerScore = 0;
let computerScore = 0;
let roundPlayer = '';

function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
} 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toLocaleUpperCase() + 
                      playerSelection.slice(1);

    if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" || 
        playerSelection === "Scissors" && computerSelection === "Paper"
        ) {
            playerScore++
            roundPlayer = "player"
        
            return `${playerSelection} beats ${computerSelection}.`

    } else if (
        computerSelection === "Rock" && playerSelection === "Scissors" ||
        computerSelection === "Paper" && playerSelection === "Rock" || 
        computerSelection === "Scissors" && playerSelection === "Paper"
        ) {
            computerScore++
            roundPlayer = 'computer'

            return `${playerSelection} is beaten by ${computerSelection}.`
        } else if (
            playerSelection === computerSelection
        ) {
            roundPlayer = "tie"

            return `You and computer chose ${computerSelection}.`
        } 
}

function setWinner() {
  if (roundPlayer === "player") {
          return "You won!";
      } else if (roundPlayer === "computer"){
          return "Computer won!";
      } else {
          return "It's a tie";
      }
}

function game() {
    const scoreInfo = document.querySelector('.scoreinfo');
    const scoreMessage = document.querySelector('.scoremessage');
    const pcChoice = document.querySelector('.pcsign');
    const playerChoice = document.querySelector('.playersign');
    const pcScore = document.querySelector('.pcscore');
    const userScore = document.querySelector('.playerscore');
    const btn = document.querySelectorAll('button');

    btn.forEach((button) => {
        let playerSelection = button.className;
        button.addEventListener('click', () => {
                let computerSelection = computerPlay();
                scoreMessage.textContent = playRound(playerSelection, computerSelection);
                scoreInfo.textContent = setWinner();
                switch (playerSelection) {
                    case "rock":
                        playerChoice.setAttribute("src", "./img/rock-hand.png");
                        break;
                    case "paper": 
                        playerChoice.setAttribute("src", "./img/paper-hand.png");
                        break;
                    case "scissors":
                        playerChoice.setAttribute("src", "./img/scissors-hand.png");
                        break;
                }

                switch (computerSelection) {
                    case "Rock":
                        pcChoice.setAttribute("src", "./img/rock-hand.png");
                        break;
                    case "Paper": 
                        pcChoice.setAttribute("src", "./img/paper-hand.png");
                        break;
                    case "Scissors":
                        pcChoice.setAttribute("src", "./img/scissors-hand.png");
                        break;
                }
                pcScore.textContent = `Computer: ${computerScore}`;
                userScore.textContent = `Player: ${playerScore}`;
            }
        )
    })
}

game()