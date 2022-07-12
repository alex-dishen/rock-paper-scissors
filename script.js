// Function that randomly returns rock paper or scissors
function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
} 

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let caseInsensitivePlayer = playerSelection[0].toUpperCase() + 
        playerSelection.slice(1)
        
    if (playerSelection != null) {
        playerSelection = playerSelection.toLowerCase();
    }
    
    if (
        computerSelection === "Rock" && playerSelection === "scissors" ||
        computerSelection === "Paper" && playerSelection === "rock" || 
        computerSelection === "Scissors" && playerSelection === "paper"
        ) {
        return `Computer won! ${computerSelection} beats ${caseInsensitivePlayer}.`
    } else if (
        playerSelection === "rock" && computerSelection === "Scissors" ||
        playerSelection === "paper" && computerSelection === "Rock" || 
        playerSelection === "scissors" && computerSelection === "Paper"
        ) {
            return `You won! ${caseInsensitivePlayer} beats ${computerSelection}.`
        } else if (
            playerSelection === computerSelection.toLowerCase()
        ) {
            return `It's a tie, you and computer chose ${playerSelection}.`
        } else {
            return `You didn't choose an item to fight with`
        }
}