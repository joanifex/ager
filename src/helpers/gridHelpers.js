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
  return [];
}

export function createInitialGrid(tiles) {
  return {
    rivers: createGridRivers(),
    tiles: createGridTiles(tiles),
  };
}
