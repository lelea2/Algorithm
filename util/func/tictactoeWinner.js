const BOARD_SIZE = 3

// For 3 * 3 board, stateOfTheGame  = [row1, row2, row3, col1, col2, col3, diag1, diag2]
let stateOfTheGame = new Array(BOARD_SIZE * 2 + 2)

//Initialize the board with zero
stateOfTheGame.fill(0)
    
function isTicTacToeWon (row, column, player) {
    
  // We will use -1 for 'ZERO' and +1 for player 'EX' 
  let point = (player == 'ZERO') ? -1 : 1;
  
  // update row
  stateOfTheGame[row] += point;

  // update column
  stateOfTheGame[BOARD_SIZE + column] += point;

  // update diagonal1
  if (row == column) {
    stateOfTheGame[2*BOARD_SIZE] += point
    // case (2, 2) in 3 * 3 Board
    let shouldUpdateDia2 = (BOARD_SIZE + 1) / 2 == column ? true : false;
    if ( shouldUpdateDia2 ) {
      stateOfTheGame[2*BOARD_SIZE + 1] += point
    }
  }

  // update diagonal2
  if (row + column == BOARD_SIZE + 1) {
    stateOfTheGame[2*BOARD_SIZE + 1] += point;
  }
  let i = stateOfTheGame.indexOf(3);
  let j = stateOfTheGame.indexOf(-3);

  // check for the winner in all rows, columns, diagonals
  return (i >= 0 || j >= 0) ? true : false;
}

console.log( isTicTacToeWon(0, 0, 'ZERO') ) // false
console.log( isTicTacToeWon(0, 1, 'ZERO') ) // false
console.log( isTicTacToeWon(0, 2, 'ZERO') ) // true
