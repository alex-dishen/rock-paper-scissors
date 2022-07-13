// We put those variables in global scop, so they could be available 
// for 2 functions;
let playerScore = 0;
let computerScore = 0;
// Function to return random name 
function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    // At the and we multiply random with items.length to allow 
    // function random go through all items in variable items
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
} 

function playRound(playerSelection, computerSelection) {  
    // Condition bellow prevents applying .toLowerCase() to null statement
    // what stops is from throwing an error as .toLowerCase can't be 
    // applied to null   
    let caseInsensitivePlayer = (playerSelection != null) ? playerSelection = 
        playerSelection.toLowerCase() : playerSelection;
    // Condition bellow converts the first element of the string to upper case
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
            ++computerScore

            return `${computerSelection} beats ${caseInsensitivePlayer}.`
    } else if (
        //Player wins
        playerSelection === "rock" && computerSelection === "Scissors" ||
        playerSelection === "paper" && computerSelection === "Rock" || 
        playerSelection === "scissors" && computerSelection === "Paper"
        ) {
            ++playerScore

            return `${caseInsensitivePlayer} beats ${computerSelection}.`
        } else if (
            // Tie
            playerSelection === computerSelection.toLowerCase()
        ) {
            return `It's a tie, you and computer chose ${caseInsensitivePlayer}.`
        } else if (
            playerSelection === null || playerSelection === undefined 
        ) {
            return `You didn't choose an item to fight with`
        } else {
            return "You can't fight with that"
        }
}

function game() {
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?", " ")
        // We assigned function computerPlay() to variable computerSelection 
        // to be able to run the function in a loop 5 times
        let computerSelection = computerPlay();        

        console.log("Round " + i)
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