const startGameBtn = document.getElementById('start-game-btn');

let gameIsRunning = false;


const getPlayerChoice = () => {
    const selection = prompt('rock paper scissor ? ', "rock");
    if(selection !== 'rock' && selection !== 'scissor' && selection !== 'paper')
    {
        alert("we choosed rock for you");
        return 'rock';
    }
    return selection;

};

const getComputerChoice = () => 
{
    const randomValue = Math.floor(Math.random()*10)
    if(randomValue < 4)
    return 'rock';
    
    if(randomValue < 6)
    return 'scissor';

    return 'paper';


};

const getWinner = (playerSelection = 'rock',computerSelection = 'draw') => {
    if(computerSelection === playerSelection) return 'draw';

    if (
      (playerSelection === "rock" && computerSelection === "scissor") ||
      (playerSelection === "scissor" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return "player won";
    }    

    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissor") ||
      (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        return 'computer won'
    }

};


startGameBtn.addEventListener('click',() => {
    if(gameIsRunning)
    {
        return;
    }
    gameIsRunning = true;
    console.log("game is starting");
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log('player selection = ' , playerSelection);
    console.log('computer selection = ', computerSelection);

    const winner = getWinner(playerSelection,computerSelection);
    console.log(winner);
    alert(winner);

    gameIsRunning = false;
});