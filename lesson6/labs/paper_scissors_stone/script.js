// Pseudo code Rock Paper Scissors

// 1. Ask user to choose between "Rock" (enter #1) "Paper" (enter #2) "Scissors" (enter #3)
// 2. Store choice "user-number" = 1 or 2 or 3  
// 3. Randomly pick number between 0 and 1, Multiply by 4 and take absolute number
// 5. Store number in "robot-number" = 1 or 2 or 3
// 6. Display value of "robot-number" 




// To go further:

// 6. Compare "user-number" and "robot-number":
// 	if "user-number" = "robot-number" display "draw"
// 	if "user-number" = 1 and "robot-number" = 2 display "you win"
// 	if "user-number" = 3 and "robot-number" = 2 display "you win"
// 		...


var UserNumber = prompt ("Choose Rock, Paper or Scissors!");
var RobotNumber = Math.floor(Math.random()*3);

var compare = function(UserNumber, RobotNumber){
  if UserNumber === RobotNumber {
    <!-- /*document.write "That's a draw!";*/ -->
      return "That's a draw!";
  }
  else if (UserNumber === 1){
    if (RobotUser === 2){
      return "you win!";
    }
    else if (RobotUser === 3){
      return "you win!";
    }
  }
  else if (UserNumber === 2){
     if (RobotNumber === 1){
     return "you win!";
    }
      else if (RobotUser === 3){
      return "you lose!";
    }
  }
  else if (UserNumber === 3){
     if (RobotNumber === 1){
     return "you lose!";
    }
      else if (RobotUser === 2){
      return "you win!";
  }
};