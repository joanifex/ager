import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';

const randomTiles = [];
for (var i = 10; i !== 0; i--) {
  randomTiles.push({
    type: tileTypes[Math.floor(Math.random()*tileTypes.length)],
    id: uuid(),
  });
}

const tiles = (state = randomTiles, action) => {
  switch (action.type) {
    default: 
      return state;
  }
}

export default tiles;
