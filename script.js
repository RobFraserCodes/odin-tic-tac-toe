document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function() {
        if (cell.textContent.trim() === '') {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
  
    const getBoard = () => board;
  
    const setCell = (index, player) => {
      if (index > board.length) return;
      board[index] = player.getSymbol();
    };
  
    const resetBoard = () => {
      board = ["", "", "", "", "", "", "", "", ""];
    };
  
    return { getBoard, setCell, resetBoard };
})();
  
const Player = (symbol) => {
    let playerSymbol = symbol;

    const getSymbol = () => playerSymbol;

    return { getSymbol };
};

const GameController = (() => {
    const playerX = Player("X");
    const playerO = Player("O");
    let currentPlayer = playerX;
  
    const switchPlayer = () => {
      currentPlayer = currentPlayer === playerX ? playerO : playerX;
    };

    const getCurrentPlayer = () => currentPlayer.getSymbol();
  
    const playTurn = (cellIndex) => {
        if (Gameboard.getBoard()[cellIndex] === '') {
          Gameboard.setCell(cellIndex, currentPlayer);
          switchPlayer();
          // Add logic to check for the winner or a tie
        }
    };
  
    return { playTurn, getCurrentPlayer };
})();

const DisplayController = (() => {
    const cells = document.querySelectorAll('.cell');
  
    const updateBoard = () => {
      const currentBoard = Gameboard.getBoard();
      cells.forEach((cell, index) => {
        cell.textContent = currentBoard[index];
      });
    };
  
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (cell.textContent.trim() === '') {
                GameController.playTurn(index);
                cell.textContent = GameController.getCurrentPlayer();
                // Optionally switch player here or inside GameController after checking the game state
            }
        });
    });    
  
    const clearBoardDisplay = () => {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
        });
    };

    document.getElementById('resetButton').addEventListener('click', () => {
        Gameboard.resetBoard();
        clearBoardDisplay();
    });

    return { updateBoard };
  })();
  
  