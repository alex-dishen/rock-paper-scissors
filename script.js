// Function that randomly returns rock paper or scissors
function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
} 

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    let caseInsensitivePlayer = playerSelection[0].toUpperCase() + 
        playerSelection.slice(1)
    
    if (
        computerSelection === "Rock" && playerSelection === "scissors" ||
        computerSelection === "Paper" && playerSelection === "rock" || 
        computerSelection === "Scissors" && playerSelection === "paper"
        ) {
        return `Computer won! ${computerSelection} beats ${caseInsensitivePlayer}.`
    } else if (
        computerSelection === playerSelection
        ) {
            return `It's a tie, you and computer chose ${computerSelection}.`
        } else {
            return `You won! ${caseInsensitivePlayer} beats ${computerSelection}.`
        }
}