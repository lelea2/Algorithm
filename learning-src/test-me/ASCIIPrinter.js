class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.area = new Array(this.height).fill(new Array(this.width).fill(''));
  }

  getArea() {
    return this.area;
  }

  fillArea(char, left, top, right, bottom) {
    for (let i = top; i <= bottom; i++) {
      const row = new Array(this.width).fill('').map((_, j) => {
        return (j >= left && j <= right) ? char : '';
      });
      this.area[i] = [...row];
    }
  }

  fillPosition(char, j, i) {
    const board = [...this.area[i]];
    board[j] = char;
    this.area[i] = [...board];
  }

  clearPosition(j, i) {
    const board = [...this.area[i]];
    board[j] = '';
    this.area[i] = [...board];
  }
}

class Printer {
  constructor() {
    this.boards = []; // keep track of current boards
    this.width = 10;
    this.height = 6;
  }

  getLastFillBoard(j, i) {
    for (let board_index = this.boards.length - 1; board_index >=0; board_index--) {
      const initialBoard = this.boards[board_index].getArea();
      if (initialBoard[i][j]) {
        return initialBoard[i][j];
      }
    }
    return ' '; // if empty string, return space for printing
  }

  addBoard(board) {
    this.boards.push(board);
  }

  removeBoard(index) {
    this.boards.splice(index, 1);
  }

  drawRectangle(char, left, top, right, bottom) {
    const board = new Board(this.width, this.height);
    board.fillArea(char, left, top, right, bottom);
    this.addBoard(board);
  }

  printCanvas() {
    // print x_axis
    const x_axis = new Array(this.width).fill('').map((_, i) => i);
    console.log(' ' + x_axis.join(' '));
    for (let i = 0; i < this.height; i++) {
      // print y_axis
      let row = i;
      for (let j = 0; j < this.width; j++) {
        row += this.getLastFillBoard(j, i);
        row += ' ';
      }
      console.log(row);
    }
  }

  eraseArea(left, top, right, bottom) {
    for(let i = top; i <= bottom; i++) {
      for (let j = left; j <= right; j++) {
        this.boards.forEach(board => {
          board.clearPosition(j, i);
        });
      }
    }
  }

  extractLastFillBoardIndex(j, i) {
    for (let board_index = this.boards.length - 1; board_index >=0; board_index--) {
      const initialBoard = this.boards[board_index].getArea();
      if (initialBoard[i][j]) {
        return board_index;
      }
    }
    return this.board.length -1; // if cell is empty, then choose the last board
  }

  dragAndDrop(leftStart, topStart, leftEnd, topEnd) {
    // create a new board that only contain this area
    const board = new Board(this.width, this.height);
    const availBoardIndex = this.extractLastFillBoardIndex(leftStart, topStart);
    // console.log('>>>>availBoardIndex', availBoardIndex);
    const availBoard = this.boards[availBoardIndex].getArea();
    const offsetX = leftEnd - leftStart;
    const offsetY = topEnd - topStart;
    // create new board
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        const oldLeft = j - offsetX;
        const oldTop = i - offsetY;
        let char = '';
        if (oldLeft < 0 || oldTop < 0) {
          char = '';
        } else {
          char = availBoard[oldTop][oldLeft];
        }
        if (char) {
          board.fillPosition(char, j, i);
        }
      }
    }
    // reset board
    this.boards[availBoardIndex] = board;
  }

  bringToFront(left, top) {
    const availBoardIndex = this.extractLastFillBoardIndex(left, top);
    const board = this.boards[availBoardIndex];
    this.addBoard(board);
    this.removeBoard(availBoardIndex);
  }
}

const p = new Printer();
p.drawRectangle('L', 1, 1, 4, 4);
p.printCanvas();

p.drawRectangle('R', 2, 1, 4, 4);
p.printCanvas();

p.eraseArea(3, 2, 3, 3);
p.printCanvas();

p.drawRectangle('#', 1, 3, 8, 4);
p.printCanvas();

p.dragAndDrop(2, 2, 6, 2);
p.printCanvas();

p.bringToFront(1, 2);
p.printCanvas();

p.bringToFront(6, 2);
p.printCanvas();


// 0 1 2 3 4 5 6 7 8 9
// 0                    
// 1  L L L L           
// 2  L L L L           
// 3  L L L L           
// 4  L L L L           
// 5                    
//  0 1 2 3 4 5 6 7 8 9
// 0                    
// 1  L R R R           
// 2  L R R R           
// 3  L R R R           
// 4  L R R R           
// 5                    
//  0 1 2 3 4 5 6 7 8 9
// 0                    
// 1  L R R R           
// 2  L R   R           
// 3  L R   R           
// 4  L R R R           
// 5                    
//  0 1 2 3 4 5 6 7 8 9
// 0                    
// 1  L R R R           
// 2  L R   R           
// 3  # # # # # # # #   
// 4  # # # # # # # #   
// 5                    
//  0 1 2 3 4 5 6 7 8 9
// 0                    
// 1  L L L L   R R R   
// 2  L L   L   R   R   
// 3  # # # # # # # #   
// 4  # # # # # # # #   
// 5                    
//  0 1 2 3 4 5 6 7 8 9
// 0                    
// 1  L L L L   R R R   
// 2  L L   L   R   R   
// 3  L L # L # # # #   
// 4  L L L L # # # #   
// 5                    
//  0 1 2 3 4 5 6 7 8 9
// 0                    
// 1  L L L L   R R R   
// 2  L L   L   R   R   
// 3  L L # L # R # R   
// 4  L L L L # R R R   
// 5                    