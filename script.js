// Function that randomly returns rock paper or scissors
function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
}