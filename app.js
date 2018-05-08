/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
function nextPlayer() {
    document.getElementById("player-0-panel").classList.toggle("active");
    document.getElementById("player-1-panel").classList.toggle("active");
}
var dice, score, playerActive, roundScore, flag;
score = [0, 0];
playerActive = 0;
roundScore = 0;
flag = 0;
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
document.getElementById("score-0").innerHTML = 0;
document.getElementById("score-1").innerHTML = 0;
document.getElementById("current-0").innerHTML = 0;
document.getElementById("current-1").innerHTML = 0;





function diceRoll() {

    if (flag === 0) {
        dice = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice").src = "dice-" + dice + ".png";
        console.log(dice);
        if (dice === 1) {
            document.getElementById("current-" + playerActive).innerHTML = 0;
            roundScore = 0;
            nextPlayer();

            playerActive = (playerActive + 1) % 2;


            return;
        } else {
            roundScore = roundScore + dice;
            console.log(roundScore);
            document.getElementById("current-" + playerActive).innerHTML = roundScore;
        }
    }

}

function newGame() {
    flag = 0;
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.getElementById("score-0").innerHTML = 0;
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.getElementById("name-0").innerHTML = "Player 1";
    document.getElementById("name-1").innerHTML = "Player 2";
    dice = 0;
    score = [0, 0];
    playerActive = 0;
    roundScore = 0;

}

function holdScore() {
    if (flag === 0) {
        var x = document.getElementById("current-" + playerActive).innerHTML;
        var y = document.getElementById("score-" + playerActive).innerHTML;
        document.getElementById("score-" + playerActive).innerHTML = +x + +y;
        if ((+x + +y) >= 100) {
            flag = 1;
            document.querySelector(".player-" + playerActive + "-panel").classList.add("winner");
            document.querySelector(".player-" + playerActive + "-panel").classList.remove("active");
            //playerActive=playerActive+1;
            document.getElementById("name-" + playerActive).innerHTML = "Winner";
            return;
        }
        document.getElementById("current-" + playerActive).innerHTML = 0;
        roundScore = 0;
        nextPlayer();
        playerActive = (playerActive + 1) % 2;
    }
}
