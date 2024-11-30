
// const { appendToDisplay, clearDisplay, calculateResult } = require('../script');

// beforeEach(() => {
//   document.body.innerHTML = `<input type="text" id="display" />`;
// });

// describe('Calculator Functions', () => {

  
//   test('should append "1" to the display when appendToDisplay is called with "1"', () => {
//     appendToDisplay('1');
//     const display = document.getElementById('display');
//     expect(display.value).toBe('1');
//     // expect(display.value).toBe('4');
//   });

//   test('should append "2" to the display when appendToDisplay is called with "2"', () => {
//     appendToDisplay('2');
//     const display = document.getElementById('display');
//     expect(display.value).toBe('2');
//   });

//   test('should append "3" to display after appending "1" and "2"', () => {
//     appendToDisplay('1');
//     appendToDisplay('2');
//     appendToDisplay('3');
//     const display = document.getElementById('display');
//     expect(display.value).toBe('123');
//   });

//   // Test for clearDisplay
//   test('should clear display when clearDisplay is called', () => {
//     // Set a value in the display
//     document.getElementById('display').value = '123';
//     // Call clearDisplay
//     clearDisplay();
//     const display = document.getElementById('display');
//     // Ensure the display is cleared
//     expect(display.value).toBe('');
//   });

//   test('should clear display even when it has an expression', () => {
//     // Set an expression in the display
//     document.getElementById('display').value = '2 + 2';
//     // Call clearDisplay
//     clearDisplay();
//     const display = document.getElementById('display');
//     // Ensure the display is cleared
//     expect(display.value).toBe('');
//   });

//   // Test for calculateResult
//   test('should calculate the correct result for a valid expression "1 + 1"', () => {
//     // Set the expression in the display
//     document.getElementById('display').value = '1 + 1';
//     // Call calculateResult
//     calculateResult();
//     const display = document.getElementById('display');
//     // Expect the result to be '2'
//     expect(display.value).toBe('2');
//   });

//   test('should calculate the correct result for a valid expression "2 * 3"', () => {
//     document.getElementById('display').value = '2 * 3';
//     calculateResult();
//     const display = document.getElementById('display');
//     expect(display.value).toBe('6');
//   });

//   test('should calculate the correct result for "10 / 2"', () => {
//     document.getElementById('display').value = '10 / 2';
//     calculateResult();
//     const display = document.getElementById('display');
//     expect(display.value).toBe('5');
//   });

//   // Edge case: Handling division by zero
  
//   test('should display "Error" for invalid expression "1 / 0"', () => {
//     document.getElementById('display').value = '1 / 0';
//     calculateResult();
//     const display = document.getElementById('display');
//     expect(display.value).toBe('Error');
//   });

//   // Edge case: Handling an empty expression

//   test('should display "Error" for empty expression', () => {
//     document.getElementById('display').value = '';
//     calculateResult();
//     const display = document.getElementById('display');
//     expect(display.value).toBe('Error');
//   });

//   // Edge case: Handling malformed expression

//   test('should display "Error" for malformed expression like "1 + "', () => {
//     document.getElementById('display').value = '1 + ';
//     calculateResult();
//     const display = document.getElementById('display');
//     expect(display.value).toBe('Error');
//   });

//   // Edge case: Handling non-numeric input

//   test('should display "Error" for non-numeric input like "abc"', () => {
//     document.getElementById('display').value = 'abc';
//     calculateResult();
//     const display = document.getElementById('display');
//     expect(display.value).toBe('Error');
//   });

// });





const { createBoard, handleCellClick, resetGame } = require('../script');


// beforeEach(() => {
//   resetGame();
// });

describe('Tic Tac Toe', () => {

 
  test('initial board should be empty', () => {
    const board = Array.from(document.querySelectorAll('.cell'));
    board.forEach(cell => expect(cell.textContent).toBe(''));
  });


});




// const { JSDOM } = require('jsdom');
// const dom = new JSDOM('<!DOCTYPE html><body><div id="board"></div><p id="status"></p></body></html>');
// global.document = dom.window.document;

// const { createBoard, handleCellClick, resetGame } = require('../script');

// describe('Tic Tac Toe Game', () => {
//   beforeEach(() => {
//     resetGame();
//   });

//   test('initial board should be empty', () => {
//     const board = Array.from(document.querySelectorAll('.cell'));
//     board.forEach(cell => expect(cell.textContent).toBe(''));
//   });

//   test('player X should occupy a cell on click', () => {
//     handleCellClick(0);
//     const firstCell = document.querySelectorAll('.cell')[0];
//     expect(firstCell.textContent).toBe('X');
//   });

//   test('players should alternate turns', () => {
//     handleCellClick(0); // X
//     handleCellClick(1); // O
//     const secondCell = document.querySelectorAll('.cell')[1];
//     expect(secondCell.textContent).toBe('O');
//   });

//   test('game should declare winner when conditions are met', () => {
//     handleCellClick(0); // X
//     handleCellClick(3); // O
//     handleCellClick(1); // X
//     handleCellClick(4); // O
//     handleCellClick(2); // X wins
//     const status = document.getElementById('status');
//     expect(status.textContent).toBe('X Wins!');
//   });

//   test('game should declare a draw when board is full', () => {
//     const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8]; // Fill board without winning
//     moves.forEach(index => handleCellClick(index));
//     const status = document.getElementById('status');
//     expect(status.textContent).toBe("It's a Draw!");
//   });

//   test('resetGame should clear the board and restart the game', () => {
//     handleCellClick(0); // X
//     resetGame();
//     const board = Array.from(document.querySelectorAll('.cell'));
//     board.forEach(cell => expect(cell.textContent).toBe(''));
//     const status = document.getElementById('status');
//     expect(status.textContent).toBe("Player X's Turn");
//   });
// });

