const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const result = document.getElementById("result");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(index) {
    if (gameBoard[index] === "" && gameActive) {
        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        cells[index].classList.add(currentPlayer);

        if (checkWin()) {
            result.textContent = `${currentPlayer} venceu!`;
            gameActive = false;
        } else if (!gameBoard.includes("")) {
            result.textContent = "Empate!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");
            return true;
        }
    }

    return false;
}

function resetBoard() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("X", "O", "win");
    });
    result.textContent = "";
    currentPlayer = "X";
    gameActive = true;
}

board.style.gridTemplateColumns = `repeat(3, 100px)`;
