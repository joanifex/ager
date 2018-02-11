import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';

function getRandomTileType() {
  return tileTypes[Math.floor(Math.random() * tileTypes.length)];
}

function createRandomTile() {
  return {
    type: getRandomTileType(),
    id: uuid(),
  };
}

export function createInitialTiles() {
  return Array.from(new Array(25)).reduce(
    (tiles, tile) => {
      const newTile = createRandomTile();
      return {
        byId: {
          ...tiles.byId,
          [newTile.id]: newTile,
        },
        allIds: [...tiles.allIds, newTile.id],
      };
    },
    { byId: {}, allIds: [] },
  );
}
