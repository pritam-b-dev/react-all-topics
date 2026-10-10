import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <>
      <button
        className="bg-white text-2xl m-1 p-1 border border-gray-400 h-12 w-12 leading-9 cursor-pointer"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}

function Board({ xIsNext, square, onPlay }) {
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = `winner: ${winner}`;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    // console.log("clicked");
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const newSquare = [...square];
    if (xIsNext) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "O";
    }
    onPlay(newSquare);
  }
  return (
    <>
      <div>{status}</div>
      <div id="board" className="border-2 border-amber-800  w-1/2">
        <span className="text-xs">board component</span>
        <div className="p-10">
          <div className="flex">
            <Square value={square[0]} onSquareClick={() => handleClick(0)} />
            <Square value={square[1]} onSquareClick={() => handleClick(1)} />
            <Square value={square[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="flex">
            <Square value={square[3]} onSquareClick={() => handleClick(3)} />
            <Square value={square[4]} onSquareClick={() => handleClick(4)} />
            <Square value={square[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="flex">
            <Square value={square[6]} onSquareClick={() => handleClick(6)} />
            <Square value={square[7]} onSquareClick={() => handleClick(7)} />
            <Square value={square[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
    </>
  );
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSqures = history[currentMove];
  {
    /* currentSqures হলো প্লেয়ারদের সর্বশেষ পদক্ষেপ এর পরে আমাদের হিস্টোরি নামক এরে-অফ-এরে তে সর্বশেষ ইন্ডেক্সে জমা হওয়া নতুন এরে। */
  }

  function handlePlay(nextSquare) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move No. ${move}`;
    } else {
      description = `star the game`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div>
        <Board xIsNext={xIsNext} square={currentSqures} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </>
  );
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

export default Game;
