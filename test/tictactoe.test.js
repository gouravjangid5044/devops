const { createBoard, handleCellClick, resetGame } = require('../script');

describe('Tic Tac Toe', () => {

  // Ensure the initial board is empty
  test('initial board should be empty', () => {
    document.body.innerHTML = `
      <div id="board" class="board"></div>
      <p id="status"></p>
    `;
    createBoard();
    const board = Array.from(document.querySelectorAll('.cell'));
    board.forEach(cell => expect(cell.textContent).toBe(''));
  });

  // Ensure clicking a cell updates the board
  test('clicking a cell should update the board with the current player', () => {
    document.body.innerHTML = `
      <div id="board" class="board"></div>
      <p id="status"></p>
    `;
    createBoard();
    handleCellClick(0); // Simulate clicking the first cell
    const firstCell = document.querySelector('.cell');
    expect(firstCell.textContent).toBe('X'); // Expect X to be in the first cell
  });

  // Ensure the game detects a win
  test('game should detect a win condition', () => {
    document.body.innerHTML = `
      <div id="board" class="board"></div>
      <p id="status"></p>
    `;
    createBoard();
    handleCellClick(0); // X
    handleCellClick(3); // O
    handleCellClick(1); // X
    handleCellClick(4); // O
    handleCellClick(2); // X wins
    const status = document.getElementById('status').textContent;
    expect(status).toBe('X Wins!');
  });


  // Ensure the game resets properly
  test('resetting the game should clear the board and reset the status', () => {
    document.body.innerHTML = `
      <div id="board" class="board"></div>
      <p id="status"></p>
      <button id="reset" onclick="resetGame()">Reset Game</button>
    `;
    createBoard();
    handleCellClick(0); // Make a move
    resetGame(); // Reset the game
    const board = Array.from(document.querySelectorAll('.cell'));
    board.forEach(cell => expect(cell.textContent).toBe(''));
    const status = document.getElementById('status').textContent;
    expect(status).toBe("Player X's Turn");
  });

  // Ensure clicking on a taken cell does nothing
  test('clicking on a taken cell should not update the board', () => {
    document.body.innerHTML = `
      <div id="board" class="board"></div>
      <p id="status"></p>
    `;
    createBoard();
    handleCellClick(0); // X
    handleCellClick(0); // Try clicking the same cell again
    const firstCell = document.querySelector('.cell');
    expect(firstCell.textContent).toBe('X'); // Ensure it stays X
  });
});
