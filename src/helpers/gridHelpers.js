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
  return [
    {
      path: [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
        [2, 2],
        [3, 2],
        [3, 3],
        [4, 3],
        [4, 4],
        [5, 4],
        [5, 5],
        [6, 5],
        [6, 6],
      ],
    },
  ];
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
