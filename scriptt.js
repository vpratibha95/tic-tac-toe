let currentPlayer = "X";
let gameActive = true;
const playCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const cells = document.querySelectorAll(".cell");
const statuss = document.querySelector(".statuss");

function checkWinner() {
    for (const combo of playCombos) { // iterates through each combination.The combo variable hold individual combination  during each iteration
        const [a, b, c] = combo; // using destructuring to assign the values of the combo to individual variables a,b,c (these variables represent the indices of the cells within the combination)
        if (cells[a].textContent === cells[b].textContent &&
            cells[b].textContent === cells[c].textContent &&
            cells[a].textContent !== '') { // checks a is not an empty string
            gameActive = false;//game is no longer active because player has won
            statuss.textContent = `Player ${currentPlayer} wins`; // display a message player has won
            break; //exit the loop
        }
    }
}

function checkDraw() {
    if ([...cells].every(cell => cell.textContent !== '')) {
        gameActive = false;
        statuss.textContent = "It's a draw";
    }
}

function makeMove(cellIndex) {
    if (!gameActive || cells[cellIndex].textContent !== '') return;

    cells[cellIndex].textContent = currentPlayer;
    checkWinner();
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statuss.textContent = `Player ${currentPlayer}'s turn`;
        checkDraw();
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
    statuss.textContent = "Player X's turn";
}
