const playerOne = "X";
const playerTwo = "O";
var playerTime = playerOne;
var gamerOver = false;

refreshScreen();
initGame();

function refreshScreen() {
    if (gamerOver) {
        return;
    }

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
            }
        });
    }
}