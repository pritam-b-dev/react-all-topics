function getNextPlayer(currentPlayer) {
  if (currentPlayer === "X") {
    return "O";
  } else {
    return "X";
  }
}

console.log(getNextPlayer("X"));
console.log(getNextPlayer("O"));
