
// function appendToDisplay(value) {
//     const display = document.getElementById('display');
//     display.value += value;
//   }
  
  
//   function clearDisplay() {
//     const display = document.getElementById('display');
//     display.value = '';
//   }
  
  
//   function calculateResult() {
//     const display = document.getElementById('display');
    
//     // Check for empty expression
//     if (display.value.trim() === '') {
//       display.value = 'Error';
//       return;
//     }
  
//     // Check for division by zero
//     if (display.value.includes('/ 0')) {
//       display.value = 'Error';
//       return;
//     }
  
//     try {
//       // Evaluate the expression
//       const result = eval(display.value);
//       // Check if the result is finite, otherwise show 'Error'
//       display.value = isFinite(result) ? result : 'Error';
//     } catch (error) {
//       // Catch any errors (e.g., malformed expression)
//       display.value = 'Error';
//     }
//   }
  
//   // Export functions for testing
//   module.exports = {
//     appendToDisplay,
//     clearDisplay,
//     calculateResult
//   };

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winConditions = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal
  [2, 4, 6]  // Reverse diagonal
];

function createBoard() {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';
  board.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    if (cell) cellElement.classList.add('taken');
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => handleCellClick(index));
    boardElement.appendChild(cellElement);
  });
}

function handleCellClick(index) {
  if (!gameActive || board[index]) return;

  board[index] = currentPlayer;
  if (checkWinner()) {
    document.getElementById('status').textContent = `${currentPlayer} Wins!`;
    gameActive = false;
    createBoard();

    return;
  }
  
  if (board.every(cell => cell)) {
    document.getElementById('status').textContent = `It's a Draw!`;
    gameActive = false;
    createBoard();
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
  createBoard();
}

function checkWinner() {
  return winConditions.some(condition =>
    condition.every(index => board[index] === currentPlayer)
  );
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
  createBoard();
}

document.addEventListener('DOMContentLoaded', () => {
  createBoard();
  document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
});
























