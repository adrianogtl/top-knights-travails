function getKnightMoves([x, y]) {
  const moves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  return moves.filter(([a, b]) => a >= 0 && a <= 7 && b >= 0 && b <= 7);
}

function calcKnightMoves(start, end) {
  const queue = [[start, [start]]];
  const visited = new Set();

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const key = current.toString();
    if (key === end.toString()) return path;

    if (!visited.has(key)) {
      visited.add(key);
      for (let move of getKnightMoves(current)) {
        queue.push([move, [...path, move]]);
      }
    }
  }
}

function knightMoves(start, end) {
  const path = calcKnightMoves(start, end);
  console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
  for (let position of path) {
    console.log(position);
  }
}

knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
