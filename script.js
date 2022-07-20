let playerScore = 0;
let computerScore = 0;
let roundPlayer = '';

function computerPlay() {
    const items = ['Rock', 'Paper', 'Scissors'];
    return items[Math.floor(Math.random() * items.length)];
} 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toLocaleUpperCase() + 
                      playerSelection.slice(1);

    if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Paper' && computerSelection === 'Rock' || 
        playerSelection === 'Scissors' && computerSelection === 'Paper'
        ) {
            playerScore++;
            roundPlayer = 'player';
        
            return `${playerSelection} beats ${computerSelection}.`;

    } else if (
        computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Paper' && playerSelection === 'Rock' || 
        computerSelection === 'Scissors' && playerSelection === 'Paper'
        ) {
            computerScore++;
            roundPlayer = 'computer';

            return `${playerSelection} is beaten by ${computerSelection}.`;
        } else if (
            playerSelection === computerSelection
        ) {
            roundPlayer = 'tie';

            return `You and computer chose ${computerSelection}.`;
        } 
}

const scoreInfo = document.querySelector('.scoreinfo');
const scoreMessage = document.querySelector('.scoremessage');
const pcChoice = document.querySelector('.pcsign');
const playerChoice = document.querySelector('.playersign');
const pcScore = document.querySelector('.pcscore');
const userScore = document.querySelector('.playerscore');
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

function setWinner() {
  if (roundPlayer === 'player') {
          return 'You won!';
      } else if (roundPlayer === 'computer'){
          return 'Computer won!';
      } else {
          return 'It\'s a tie';
      }
}

function play(playerSelection) {
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

btnRock.addEventListener('click', () => {play('rock');})

btnPaper.addEventListener('click', () => {play('paper')})

btnScissors.addEventListener('click', () => {play('scissors')})