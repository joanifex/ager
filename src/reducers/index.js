import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';

const randomTiles = Array.from(new Array(9)).map(tile => ({
  type: tileTypes[Math.floor(Math.random() * tileTypes.length)],
  id: uuid(),
  populated: false
}));

const initialState = {
  tiles: randomTiles
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POPULATE_TILE':
      return {
        ...state,
        tiles: state.tiles.map(
          tile =>
            tile.id === action.id
              ? {
                  ...tile,
                  populated: true
                }
              : tile
        )
      };
    default:
      return state;
  }
};
