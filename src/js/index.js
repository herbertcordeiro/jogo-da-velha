const playerOne = "X";
const playerTwo = "O";
var playerTime = playerOne;
var gamerOver = false;

refreshScreen();
initGame();

function refreshScreen() {
    if (playerTime == playerOne) {
        var player = document.querySelectorAll("div.turn img")[0];
        player.setAttribute("src", "assets/img/xis.png");
    } else {
        var player = document.querySelectorAll("div.turn img")[0];
        player.setAttribute("src", "assets/img/bola.png");
    }
}

function initGame() {
    var space = document.getElementsByClassName("partborder");
    for (var i = 0; i < space.length; i++) {
        space[i].addEventListener("click", function checkPlay() {
            if (gamerOver) {
                return;
            }
            if (this.getElementsByTagName("img").length == 0) {

                if (playerTime == playerOne) {
                    this.innerHTML = "<img src='assets/img/xis.png' height='100px'>";
                    this.setAttribute("played", playerOne);
                    playerTime = playerTwo;
                } else {
                    this.innerHTML = "<img src='assets/img/bola.png' height='100px'>";
                    this.setAttribute("played", playerTwo);
                    playerTime = playerOne;
                }
                refreshScreen();
                checkWinner();
            }

        });
    }
}

function checkWinner() {
    var x1 = document.getElementById("x1").getAttribute("played");
    var x2 = document.getElementById("x2").getAttribute("played");
    var x3 = document.getElementById("x3").getAttribute("played");

    var y1 = document.getElementById("y1").getAttribute("played");
    var y2 = document.getElementById("y2").getAttribute("played");
    var y3 = document.getElementById("y3").getAttribute("played");

    var z1 = document.getElementById("z1").getAttribute("played");
    var z2 = document.getElementById("z2").getAttribute("played");
    var z3 = document.getElementById("z3").getAttribute("played");

    var winner = "";

    if ((x1 == y1 && x1 == z1) || (x1 == x2 && x1 == x3) || (x1 == y2 && x1 == z3) && x1 != "") {
        winner = x1;
    } else if ((y2 == y1 && y2 == y3) || (y2 == x2 && y2 == z2) || (y2 == x3 && y2 == z1) && y2 != "") {
        winner = y2;
    } else if ((z3 == z2 && z2 == z1) || (z3 == x3 && z3 == y3) && y3 != "") {
        winner = z3;
    }

    if (winner != "") {
        gamerOver = true;
        console.log("ganhouu" + winner);
    }
}