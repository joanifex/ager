function createGridTiles(tiles) {
  return tiles.reduce((grid, tile, index) => {
    return (
      (index % 5 === 0
        ? grid.push([tile.id])
        : grid[grid.length - 1].push(tile.id)) && grid
    );
  }, []);
}

function createGridRivers() {
  const riverStartPosition = Math.floor(Math.random() * 3);
  const riverSide = Math.floor(Math.random() * 2) === 0 ? 'top' : 'left';
  const riverStartVertex =
    riverSide === 'top' ? [riverStartPosition, 0] : [0, riverStartPosition];

  const river = { path: [riverStartVertex] };
  while (
    river.path[river.path.length - 1][0] !== 5 &&
    river.path[river.path.length - 1][1] !== 5
  ) {
    let prevNode = river.path[river.path.length - 1];
    let direction = Math.floor(Math.random() * 2) === 0 ? 'down' : 'bottom';
    let isSecondNode = river.path.length === 1;
    if (isSecondNode) {
      direction = riverSide === 'top' ? 'down' : 'bottom';
    }
    let nextNode =
      direction === 'down'
        ? [prevNode[0], prevNode[1] + 1]
        : [prevNode[0] + 1, prevNode[1]];
    river.path.push(nextNode);
  }
  return [river];
}

export function createInitialGrid(tiles) {
  return {
    rivers: createGridRivers(),
    tiles: createGridTiles(tiles),
  };
}

export function getVerticesForCoordinates(coordinates) {
  return {
    topLeft: [coordinates[0], coordinates[1]],
    topRight: [coordinates[0] + 1, coordinates[1]],
    bottomLeft: [coordinates[0], coordinates[1] + 1],
    bottomRight: [coordinates[0] + 1, coordinates[1] + 1],
  };
}

export function areVerticesBorderingRiver({ rivers, vertices }) {
  return rivers.some(river =>
    river.path.some((node, index) => {
      const nextNode = river.path[index + 1];
      const prevNode = river.path[index - 1];
      return (
        node[0] === vertices[0][0] &&
        node[1] === vertices[0][1] &&
        ((nextNode &&
          nextNode[0] === vertices[1][0] &&
          nextNode[1] === vertices[1][1]) ||
          (prevNode &&
            prevNode[0] === vertices[1][0] &&
            prevNode[1] === vertices[1][1]))
      );
    }),
  );
}
