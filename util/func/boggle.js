// Input: dictionary[] = {"GEEKS", "FOR", "QUIZ", "GO"};
//        boggle[][]   = {{'G','I','Z'},
//                        {'U','E','K'},
//                        {'Q','S','E'}};
//       isWord(str): returns true if str is present in dictionary
//                    else false.

// Output:  Following words of dictionary are present
//          GEEKS
//          QUIZ

// Solution 1:
// 1. GRAPH
// 2. DFS, and mark visited node

// Solution 2: Trie data structure

/**
 *
 * @param {String} word -> a word that is in dictionary
 * @param {Number} index
 * @param {*} board array[][] // character array
 * @param {Number} i
 * @param {Number} j
 * @param {*} visited array[][] // boolean array
 */
function search(word, index, board, i, j, visited) {
  if (i < 0 || j < 0 || i === board.length || j === board[0].length || visited[i][j] === true) {
    return;
  }
  // Mark visited node
  visited[i][j] = true;
  let result = false;
  if (board[i][j] === word.indexOf(index)) {
    if (index === word.length - 1) { // last character is matching, return true
      return true;
    }
    result = search(word, index + 1, board, i - 1, j, visited) ||
      search(word, index + 1, board, i + 1, j, visited) ||
      search(word, index + 1, board, i, j - 1, visited) ||
      search(word, index + 1, board, i, j + 1, visited);
  }
  visited[i][j] = false; // remark node as not visited for next root search
  return result;
}

/**
 * Function helper to return if board has path to exisiting word
 * @param {*} board
 * @param {*} word
 */
function exist(board, word) {
  if (board.length === 0) {
    return false;
  }
  const visited = new Array(board.length); // [board.length][board[0].length] array
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (search(word, 0, board, i, j, visited)) {
        return true;
      }
    }
  }
  return false;
}
