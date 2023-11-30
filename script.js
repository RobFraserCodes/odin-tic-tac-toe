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
  
    const playTurn = (cellIndex) => {
      Gameboard.setCell(cellIndex, currentPlayer);
      switchPlayer();
      // Add logic to check for the winner or a tie
    };
  
    return { playTurn };
})();
  
  