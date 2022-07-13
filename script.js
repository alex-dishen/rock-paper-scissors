// Function that randomly returns rock paper or scissors
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
} 

function playRound(playerSelection, computerSelection) {        
    if (playerSelection != null) {
        playerSelection = playerSelection.toLowerCase();
    }
    
    if (
        computerSelection === "Rock" && playerSelection === "scissors" ||
        computerSelection === "Paper" && playerSelection === "rock" || 
        computerSelection === "Scissors" && playerSelection === "paper"
        ) {
        computerScore++

        return `${computerSelection} beats ${playerSelection}.`
    } else if (
        playerSelection === "rock" && computerSelection === "Scissors" ||
        playerSelection === "paper" && computerSelection === "Rock" || 
        playerSelection === "scissors" && computerSelection === "Paper"
        ) {
            playerScore++

            return `${playerSelection} beats ${computerSelection}.`
        } else if (
            playerSelection === computerSelection.toLowerCase()
        ) {
            return `It's a tie, you and computer chose ${playerSelection}.`
        } else {
            return `You didn't choose an item to fight with`
        }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?")
        let computerSelection = computerPlay();        

        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Score: \nYou: ${playerScore} Computer: ${computerScore}`)
        console.log("-------------------------");
    }
    if (playerScore > computerScore) {
        console.log("You won!!!!!")
    } else if (computerScore > playerScore){
        console.log("Computer won!!!!!!!")
    } else {
        console.log("Friendship WON!!!!!")
    }
}

game()