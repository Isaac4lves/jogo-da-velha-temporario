let recentSelected = [];
let winPatterns = [
    ['n1','n2','n3'], ['n4','n5','n6'], ['n7','n8','n9'], 
    ['n1','n4','n7'], ['n2','n5','n8'], ['n3','n6','n9'], 
    ['n1','n5','n9'], ['n7','n5','n3']
];

let player = "O";
let playerWin = false;

function repetirAcao() {
    let last = recentSelected[0];
    recentSelected.shift();

    document.querySelector(`#${last}`).innerHTML = "";
}

setInterval(repetirAcao, 2000);

document.querySelectorAll(".cell button").forEach(button => {
    button.addEventListener("click", function() {
        select(this.id);
    });
});

function select(id) {
    let cell = document.querySelector(`#${id}`);

    if(!cell){ return; }
    cell.innerHTML = player;
    recentSelected.push(id);
    
    if (checkWin(player)) {
        playerWin = true;
        setTimeout(() => alert(`${player} venceu!`), 100);
        return;
    }
    swap();
}

function checkWin(currentPlayer) {
    return winPatterns.some(pattern => 
        pattern.every(id => document.querySelector(`#${id}`).innerHTML === currentPlayer)
    );
}

function swap() {
    player = (player === "O") ? "X" : "O";
}
