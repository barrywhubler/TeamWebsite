//auto load a score on load and make dice be those values, have a play button that collapses and the dice reset to 1's.
//on play count the number of rolls it takes to beat the computer's auto load score.  
//Pop up a modal when you beat the computer's score, and advance to level two
//In the next level, the moves you are allowed are reduced by 1.
//Each time you get a score that is the difference between your score and the computer's score multiplied by the amount of moves it took you to beat the computer

//global variables:
var pictureRef = "";
var numArray = [1,1,1,1,1,1];
var playerS = 0;
var rollLoss = 0;
var computerS = 0;
var rollsLeft = 10;
var rounds = 5;
var lastRoll = 0;
var gameOver = false;
var playerTurn = true;
var playerScoreDisp;
var computerScoreDisp;
var roundDisp;
var rollsLeftDisp;
var evenOdd = false;
var player = "";

function Win(){
  //popup modal
  console.log("Game over");

  showGameOver("You Win");
  restart();
  updateDisp();
}

function Lose(){
//popup modal
  console.log("Game over");

  showGameOver("You Lose");
  restart();
  updateDisp();
}

function restart(){
resetDice();
numArray = [1,1,1,1,1,1];
pictureRef = "";
playerS = 6;
rollLoss = 0;
computerS = 0;
rollsLeft = 10;
rounds = 5;
lastRoll = 0;
gameOver = false;
playerTurn = true;
playerScoreDisp;
computerScoreDisp;
roundDisp;
rollsLeftDisp;

}

function roundLost() {
  if (rollsLeft <= 0 && playerS <= computerS){
    
    return true;
  }
  else return false;
}
function loadGame(){
  computerRoll();
  updateDisp();
}

function computerRoll(){
  var nextScore = 0;
  for (i = 0; i < 4; i++) {
    nextScore += getNextNumber();
    }
  console.log(nextScore);
  computerS = Math.max(computerS,nextScore);
}

function nextRound(){
  var roundL = roundLost();

  if(roundL){
    gO();
  }

  else if (rollsLeft<=0){
    rounds -= 1;
  showModal("Play next round?", 
      "Last Role Was: " + lastRoll);
  resetPlayerScore();
  resetDice();
  playerS = 0;
  rollLoss +=1;
  rollsLeft = 10 - rollLoss; 
  updateDisp();
  }
}

function resetPlayerScore(){
  numArray = [1,1];
}

function showModal(modalTitle, info){
  document.getElementById("modalTitle").innerHTML = modalTitle;
  //document.getElementById("runningPlayerScore").innerHTML = "Player score: " + playerS;
  document.getElementById("runningComputerScore").innerHTML = "Computer score: " + computerS;
  document.getElementById("additionalInfo").innerHTML = info;
  $("#modalDisp").modal()
}
function showGameOver(modalTitle){
  document.getElementById("modalTitle2").innerHTML = modalTitle;
  //document.getElementById("runningPlayerScore2").innerHTML = "Player score: " + playerS;
  document.getElementById("runningComputerScore2").innerHTML = "Computer score: " + computerS;
  $("#modalDisp2").modal()
}

function updateDisp(){
  playerScoreDisp.innerHTML = player;
  computerScoreDisp.innerHTML = "Computer Score: " + computerS;
  roundDisp.innerHTML = "Round: " + (6-rounds);
  rollsLeftDisp.innerHTML = "Rolls Left: " + rollsLeft;
}

function getReferences(){
  playerScoreDisp = document.getElementById("playerScoreDisp");
  computerScoreDisp = document.getElementById("computerScoreDisp");
  roundDisp = document.getElementById("roundDisp");
  rollsLeftDisp = document.getElementById("rollsLeftDisp");
  showModal("Play Game", "Try to beat the computers roll","Each roll decreases your number of rolls left","See if you can last all five rounds!");
}

function getNextNumber(){
  var nextNum = Math.floor(Math.random() * 6 + 1)
  var thisNum = Math.Even
  return nextNum;
}


function roll(){
  var num = getNextNumber();
  //update player score array:
  var newRef = "";
  switch(num){
    case 1:
      newRef= "d1.png";
      break;
    case 2:
      newRef = "d2.png"
      break;
    case 3:
      newRef = "d3.png"
      break;
    case 4:
      newRef = "d4.png"
      break;
    case 5:
      newRef = "d5.png"
      break;
    case 6:
      newRef = "d6.png"
      break;
    default:
      console.log("value of roll is invalid: " + num);
  }  
  
  pictureRef = newRef;
  return num;
}

//Use to get Odd or Even
function getPlayerScore(){
  var sum = numArray.reduce(function(a, b){
    return a + b;
    }, 0);
  console.log(sum);
  playerS = sum;

  if(playerS == 2){
  evenOdd = false;
  }else if(playerS == 3){
  evenOdd = true;
  }else if(playerS == 4){
  evenOdd = false;
  }else if(playerS == 5){
  evenOdd = true;
  }else if(playerS == 6){
  evenOdd = false;
  }else if(playerS == 7){
  evenOdd = true;
  }else if(playerS == 8){
  evenOdd = false;
  }else if(playerS == 9){
  evenOdd = true;
  }else if(playerS == 10){
  evenOdd = false;
  }else if(playerS == 11){
  evenOdd = true;
  }else if(playerS == 12){
  evenOdd = false;
  }
  player = "Even";
if (evenOdd == true){
  player = "Odd";
}
document.getElementById ("playerScoreDisp").content = ""+ player;

}

function roll1(){
  var num = roll();
  numArray[0] = num;
  var newDice = document.getElementById('placeholder1');
  newDice.src = pictureRef;
  getPlayerScore();
  //nextRound();
  updateDisp();
  
}

function roll2(){
  var num = roll();
  numArray[1] = num;
  var newDice = document.getElementById('placeholder2');
  newDice.src = pictureRef;
  getPlayerScore();
  //nextRound();

  updateDisp();

}


function resetDice(){
  document.getElementById('placeholder1').src = "d1.png";
  document.getElementById('placeholder2').src = "d1.png";
  document.getElementById('placeholder3').src = "d1.png";
  document.getElementById('placeholder4').src = "d1.png";
  document.getElementById('placeholder5').src = "d1.png";
  document.getElementById('placeholder6').src = "d1.png";
 
}