const playerOne = "X";
const playerTwo = "O";
var playerTime = playerOne;
var gamerOver = false;
var count = 0;

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
    var partborders = document.getElementsByClassName("partborder");
    for (var i = 0; i < partborders.length; i++) {
        partborders[i].addEventListener("click", function () {
            if (gamerOver) {
                return;
            }
            if (this.getElementsByTagName("img")) {
                console.log(this);
                if (this.childNodes[1].getAttribute("src") == "") {
                    if (playerTime == playerOne) {
                        this.childNodes[1].setAttribute("src", "assets/img/xis.png");
                        this.setAttribute("played", playerOne);
                        playerTime = playerTwo;
                        count++;
                    } else {
                        this.childNodes[1].setAttribute("src", "assets/img/bola.png");
                        this.setAttribute("played", playerTwo);
                        playerTime = playerOne;
                        count++;
                    }
                    refreshScreen();
                    checkWinner();
                    checkATie(count);
                }
            }

        });
    }
}

function checkATie(count) {
    if (count == 9) {
        alert("EMPATOU!");
        gamerOver = true;
    }
}

function checkWinner() {

    var winner = "";

    var position = {
        x1: '',
        x2: '',
        x3: '',
        y1: '',
        y2: '',
        y3: '',
        z1: '',
        z2: '',
        z3: '',
    };

    for (p in position) {
        position[p] = document.getElementById(p).getAttribute("played");
    }

    if (((position['x1'] == position['y1'] && position['y1'] == position['z1']) ||
            (position['x1'] == position['x2'] && position['x2'] == position['x3']) ||
            (position['x1'] == position['y2'] && position['y2'] == position['z3'])) && (position['x1'] != '')) {
        winner = position['x1'];
    } else if (((position['y2'] == position['y1'] && position['y2'] == position['y3']) ||
            (position['y2'] == position['x3'] && position['x3'] == position['z1']) ||
            (position['y2'] == position['x2'] && position['x2'] == position['z2'])) && (position['y2'] != '')) {
        winner = position['y2'];
    } else if (((position['z3'] == position['z2'] && position['z3'] == position['z1']) ||
            (position['z3'] == position['x3'] && position['z3'] == position['y3'])) && (position['z3'] != '')) {
        winner = position['z3'];
    }

    if (winner != "") {
        gamerOver = true;
        alert("O VENCEDOR FOI " + winner + "!");
        count = 0;
    }

}

function reset() {
    gamerOver = false;
    playerTime = playerOne;
    refreshScreen();
    var partborder = document.getElementsByClassName("partborder");
    var imgborder = document.getElementsByClassName("imgborder");
    for (var i = 0; i < 9; i++) {
        partborder[i].setAttribute("played", "");
        imgborder[i].setAttribute("src", "");
    }

}

function score(){
    if(gamerOver){
        if(winner == playerOne){
        }
    }
}