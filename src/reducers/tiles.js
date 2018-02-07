import uuid from 'uuid/v4';

const randomTiles = [];
for (var i = 10; i !== 0; i--) {
  randomTiles.push({
    type: 'grass',
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
