const startGameBtn = document.getElementById('start-game-btn');

let gameIsRunning = false;


const getPlayerChoice = function(){
    const selection = prompt('rock paper scissor ? ', "rock");
    if(selection !== 'rock' && selection !== 'scissor' && selection !== 'paper')
    {
        alert("we choosed rock for you");
        return 'rock';
    }
    return selection;

};

const getComputerChoice = function()
{
    const randomValue = Math.floor(Math.random()*10)
    if(randomValue < 4)
    return 'rock';
    
    if(randomValue < 6)
    return 'scissor';

    return 'paper';


};

const getWinner = function(playerSelection,computerSelection)
{
    if(computerSelection === playerSelection) return 'draw';

    if (
      (playerSelection === "rock" && computerSelection === "scissor") ||
      (playerSelection === "scissor" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return "playerwon";
    }    

    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissor") ||
      (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        return 'computerwon'
    }

}


startGameBtn.addEventListener('click',function(){
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


});