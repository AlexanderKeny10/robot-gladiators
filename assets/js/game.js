
// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length)



var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
      if (window.confirm("Are you sure you'd like to quit?")) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        playerMoney -= 10;
        break;
      }
    }

    enemyHealth -= playerAttack;
    window.alert(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');

    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
      playerMoney += 20;
      break;
    }

    playerHealth -= enemyAttack;
    window.alert(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.');

    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      break;
    }
  }
};

var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // loop through all enemies in array
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive
    if (playerHealth > 0) {
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }

      // if player is out of health or out of enemies to fight, run the endGame function
      else {
        endGame();
      }
    }
  }
};



    // function to end the entire game
var endGame = function() {
  var playerWin = playerHealth > 0;
  var winMessage = playerWin ? "Great job, you've survived the game! You now have a score of " + playerMoney + "." :
    "You've lost your robot in battle.";
  window.alert(winMessage);

  // ask player if they'd like to play again
  var playAgain = window.confirm("Would you like to play again?");

  if (playAgain) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
    // Ask player if they'd like to visit the store
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

    // If yes, take them to the store() function
    if (storeConfirm) {
        // Ask player what they'd like to do
        var shopAction = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.").toUpperCase();

        // Carry out action
        switch (shopAction) {
            case "REFILL":
                if (playerMoney >= 7) {
                    playerHealth += 20;
                    playerMoney -= 7;
                } else {
                    window.alert("You don't have enough money!");
                }
                break;

            case "UPGRADE":
                if (playerMoney >= 7) {
                    playerAttack += 6;
                    playerMoney -= 7;
                } else {
                    window.alert("You don't have enough money!");
                }
                break;

            case "LEAVE":
                window.alert("Leaving the store.");
                break;

            default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
        }
    }
};

    // start the game when the page loads
    startGame();
