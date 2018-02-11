export function createInitialGrid(tiles) {
  return tiles.reduce((grid, tile, index) => {
    return (
      (index % 5 === 0
        ? grid.push([tile.id])
        : grid[grid.length - 1].push(tile.id)) && grid
    );
  }, []);
}
