import { useState } from "react";

function Square() {
  function handleClick() {}
  return (
    <>
      <button
        className="bg-white text-2xl m-1 p-1 border border-gray-400 h-12 w-12 leading-9 cursor-pointer"
        onClick={handleClick}
      ></button>
    </>
  );
}

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  return (
    <>
      <div id="board" className="border-2 border-amber-800  w-1/2">
        <span className="text-xs">board component</span>
        <div className="p-10">
          <div className="flex">
            <Square value={square[0]} />
            <Square value={square[1]} />
            <Square value={square[2]} />
          </div>
          <div className="flex">
            <Square value={square[3]} />
            <Square value={square[4]} />
            <Square value={square[5]} />
          </div>
          <div className="flex">
            <Square value={square[6]} />
            <Square value={square[7]} />
            <Square value={square[8]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
