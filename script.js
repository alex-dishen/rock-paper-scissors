let playerScore = 0;
let computerScore = 0;
let roundPlayer = '';

function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
} 

function playRound(playerSelection, computerSelection) {  
     
    let caseInsensitivePlayer = (playerSelection != null) ? playerSelection = 
        playerSelection.toLowerCase() : playerSelection;
    
    if (playerSelection != null) {
        caseInsensitivePlayer = caseInsensitivePlayer[0].toUpperCase() + 
        caseInsensitivePlayer.slice(1);
    }
    
    if (
        //Computer wins
        computerSelection === "Rock" && playerSelection === "scissors" ||
        computerSelection === "Paper" && playerSelection === "rock" || 
        computerSelection === "Scissors" && playerSelection === "paper"
        ) {
            computerScore++
            roundPlayer = 'computer'

            return `${caseInsensitivePlayer} is beaten by ${computerSelection}.`
    } else if (
        //Player wins
        playerSelection === "rock" && computerSelection === "Scissors" ||
        playerSelection === "paper" && computerSelection === "Rock" || 
        playerSelection === "scissors" && computerSelection === "Paper"
        ) {
            playerScore++
            roundPlayer = "player"

            return `${caseInsensitivePlayer} beats ${computerSelection}.`
        } else if (
            // Tie
            playerSelection === computerSelection.toLowerCase()
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

    function disableButtons() {
      btn.forEach(elem => {
          elem.disabled = true
      })
    }

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

                if (playerScore === 5) {
                  scoreInfo.textContent = "Game Over";
                  scoreMessage.textContent = "You Won The Game";
                  disableButtons();

                } else if (computerScore === 5) {
                  scoreInfo.textContent = "Game Over";
                  scoreMessage.textContent = "Computer Won The Game";
                  disableButtons();
                }
            }
        )
    })
}

game()