// Rock paper Scissors game
// User chooses r p or s
// function letsPlay(){}
// List of all possible wins, ties, losses ?Research

var gameStats ={
    wins: 0,
    losses: 0,
    ties: 0
}

  // window.prompt with choices and question 
  var userChoice;
  var compChoice;
  var gameResult;
  
  function gameplay(){
  let play = window.prompt("Let's play Rock, Paper, Scissors! Choose 'r', 'p', or 's'")
  
  if (play.toLowerCase() == "r"){
    userChoice = "r";
    console.log("user chose " + userChoice);
    window.alert("You chose 'rock.'");
  } else if (play.toLowerCase() == "p"){
    userChoice = "p";
    console.log("user chose " + userChoice);
    window.alert("You chose 'paper.'");
  } else if (play.toLowerCase() == "s"){
    userChoice = "s";
    console.log("user chose " + userChoice);
    window.alert("You chose 'scissors.'");
  } else {
    userChoice = "r";
    console.log("computer chose " + userChoice);
    window.alert("I didn't understand your choice, so you get 'rock.'");
  }

  // save user choice to a var
// computer chooses r p or s
  // array of comp choices
  // randon num to choose from array[i]
  function getRandomInt(max) {
    var compOption =["r", "p", "s"]
    return compOption[Math.floor(Math.random()*3)];
  } //well coded Rebecca Grint
  // save comp choice to a var
  compChoice = getRandomInt();
  console.log("computer chose " + compChoice);
  
  window.alert("I chose " + compChoice + " MWAHAHAHA!");
// compare user choice to computer choice
  //  if statement to compare choices
  if (userChoice === "r") {
    if (compChoice === "r") {
        gameResult = "tie";
    } else if (compChoice === "p") {
        gameResult = "lose";
    } else { //sissors
        gameResult = "win";
  }
} else if (userChoice === "p"){
    if (compChoice === "r") {
        gameResult = "win";
    } else if (compChoice === "p") {
        gameResult = "tie";
    } else { //sissors
        gameResult = "lose";
  }
} else { //sissors
    if (compChoice === "r") {
        gameResult = "lose";
    } else if (compChoice === "p") {
        gameResult = "win";
    } else { //sissors
        gameResult = "tie";
  }
}

function keepScore() {
    if (gameResult === "win"){
        gameStats.wins++;
    } else if (gameResult === "lose") {
        gameStats.losses++;
    } else {
        gameStats.ties++;
    }
}

console.log(gameResult);
  // update my stats object
keepScore();
console.log(gameStats);
if (gameResult === "win"){
    alert("You win!\n Stats:\n" + gameStats)
} else if (gameResult === "lose"){
    alert("You lost.\n Stats:\n" + gameStats)
} else {
    alert("We tied. Blast!\n Stats:\n" + gameStats)
};

var playAgain = confirm("Would you like to play again?");

if(playAgain){
    gameplay();
}
};

gameplay();




  // use defnition of win, loss and tie in if statement
// Display the stats of win, lose tie
  // window.alert to display stats
  // create var for stats = object {wins:, losses:, ties:,}
// Ask user to play again if yes restart game if no end game
  // function to restart the game.