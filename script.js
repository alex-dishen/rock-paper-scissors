/*This variables are used by playRound() and game() functions. That is why 
thy are in global scope*/
let playerScore = 0;
let computerScore = 0;
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
            return `You didn't choose a weapon to fight with`
        } else {
            return "You can't fight with that"
        }
}

function game() {
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?", " ")
        let computerSelection = computerPlay();        

        console.log("Round " + i)
        if(playerSelection === null || playerSelection === " ") {
            console.log("You chose : no weapon")
        } else {
            console.log(`You chose: ${playerSelection}`);
        }
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