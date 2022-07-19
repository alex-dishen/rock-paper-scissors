/*This variables are used by playRound() and game() functions. That is why 
thy are in global scope*/
let playerScore = 0;
let computerScore = 0;
let roundPlayer = '';
// Returns random name 
function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
} 

function playRound(playerSelection, computerSelection) {  
    /* toLowerCase() can't be applied to lower case, it throws an error.
    To prevent toLowerCase() being applied I used if...else condition*/   
    let caseInsensitivePlayer = (playerSelection != null) ? playerSelection = 
        playerSelection.toLowerCase() : playerSelection;
    /* After toLowerCase function applied I get the output in small letters.
    But I need it to output with first letter being capital*/
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

function game() {
    const winRound = document.querySelector('.scoreinfo');
    const winner = document.querySelector('.scoremessage');
    const pcChoice = document.querySelector('.pcsign');
    const playerChoice = document.querySelector('.playersign');
    const pc = document.querySelector('.pc-score');
    const player = document.querySelector('.player-score');
    const btn = document.querySelectorAll('button');

    function setWinner() {
        if (roundPlayer === "player") {
                return "You won!";
            } else if (roundPlayer === "computer"){
                return "Computer won!";
            } else {
                return "It's a tie";
            }
    }

    btn.forEach((button) => {
        button.addEventListener('click', () => {
            for(let i = 0; i < 1; i++) {
                let playerSelection = button.className;
                let computerSelection = computerPlay();
                winner.textContent = playRound(playerSelection, computerSelection);
                winRound.textContent = setWinner();
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
            }
        })
    })

    // for (let i = 1; i < 6; i++) {
    //     console.log("Round " + i)
    //     if(playerSelection === null || playerSelection === " ") {
    //         console.log("You chose : no weapon")
    //     } else {
    //         console.log(`You chose: ${playerSelection}`);
    //     }
    //     console.log(`Computer chose: ${computerSelection}`);
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log(`Score: \nYou: ${playerScore} Computer: ${computerScore}`)
    //     console.log("-------------------------");
    // // }
    // if (playerScore > computerScore) {
    //     console.log("You won!!!!!")
    // } else if (computerScore > playerScore){
    //     console.log("Computer won!!!!!!!")
    // } else {
    //     console.log("Friendship WON!!!!!")
    // }
}
game()