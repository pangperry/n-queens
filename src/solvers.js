/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.matrixPosition = {};

//consider refactoring to a board object as a parameter 



window.findNRooksSolution = function(n, row, col) {
  //create a new Board(n) first????
  var board = new Board({n: n});
  var startRow = row || 0;
  var startCol = col || 0;
  var solution;

  var count = n; 
          
  for (var row = startRow; row < n; row++) {
    for (var col = startCol; col < n; col++) {
      board.togglePiece(row, col);
      count--;
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
        count++;
      }
      if (count === 0) {
        if (startCol < n - 1) {
          startCol++;
        } else if (startRow < n - 1 && startCol >= n - 1) {
          startCol = 0;
          startRow++;
        } 
        matrixPosition['row'] = startRow;
        matrixPosition['col'] = startCol;
        return board.rows();
      }
    }  
  }
 
  //increment the row and column values before recursion
  if (startCol < n - 1) {
    startCol++;
  } else if (startRow < n - 1 && startCol >= n - 1) {
    startCol = 0;
    startRow++;
  }
  
  matrixPosition['row'] = startRow;
  matrixPosition['col'] = startCol;

  solution = findNRooksSolution(n, startRow, startCol);
  solution = solution ? solution.rows() : solution;
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

// considering refactoring to create new board in this function
window.countNRooksSolutions = function(n) {
  var solutions = [];
  window.matrixPosition = {row: 0, col: 0};


  // WORK HERE

  // var temp = findNRooksSolution(n, window.matrixPosition['row'], window.matrixPosition['col']);
  // var temp = findNRooksSolution(n, window.matrixPosition['row'], window.matrixPosition['col']);
  // var temp = findNRooksSolution(n, window.matrixPosition['row'], window.matrixPosition['col']);
  // var temp = findNRooksSolution(n, window.matrixPosition['row'], window.matrixPosition['col']);
  
  
  // while (window.matrixPosition['row'] < n && window.matrixPosition['col'] < n) {
  //   var temp = findNRooksSolution(n, window.matrixPosition['row'], window.matrixPosition['col']);
  //   if (temp !== undefined) {
  //     solutions.push(temp);  
  //   }
  // }
  var solutionCount = solutions.length; 

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
