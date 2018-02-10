import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';

function randomTile() {
  return {
    type: tileTypes[Math.floor(Math.random() * tileTypes.length)],
    id: uuid(),
  };
}

function createInitialTiles() {
  return Array.from(new Array(25)).reduce(
    (tiles, tile) => {
      const newTile = randomTile();
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

export default function tileReducer(state = createInitialTiles(), action) {
  switch (action.type) {
    default:
      return state;
  }
}
