import {
  getGridRivers,
  getGridTiles,
  getGridCoordinatesByTileId,
  getGridVerticesByTileId,
  getRiverBordersByTileId,
} from './gridSelectors';

describe('getGridRivers', () => {
  it('should return all rivers', () => {
    const rivers = [['river']];
    const state = {
      grid: { rivers },
    };
    expect(getGridRivers(state)).toEqual(rivers);
  });
});

describe('getGridTiles', () => {
  it('should return the grid of tiles', () => {
    const tiles = [['tile']];
    const state = {
      grid: { tiles },
    };
    expect(getGridTiles(state)).toEqual(tiles);
  });
});

describe('getGridCoordinatesByTileId', () => {
  it('should return the coordinates of each tile', () => {
    const state = {
      grid: {
        tiles: [['0,0', '1,0'], ['0,1', '1,1']],
      },
    };
    const expected = {
      '0,0': [0, 0],
      '1,0': [1, 0],
      '0,1': [0, 1],
      '1,1': [1, 1],
    };
    expect(getGridCoordinatesByTileId(state)).toEqual(expected);
  });
});

describe('getGridVerticesByTileId', () => {
  it('should return the vertices of each tile', () => {
    const state = {
      grid: {
        tiles: [['0,0', '1,0'], ['0,1', '1,1']],
      },
    };
    const expected = {
      '0,0': {
        topLeft: [0, 0],
        topRight: [1, 0],
        bottomLeft: [0, 1],
        bottomRight: [1, 1],
      },
      '1,0': {
        topLeft: [1, 0],
        topRight: [2, 0],
        bottomLeft: [1, 1],
        bottomRight: [2, 1],
      },
      '0,1': {
        topLeft: [0, 1],
        topRight: [1, 1],
        bottomLeft: [0, 2],
        bottomRight: [1, 2],
      },
      '1,1': {
        topLeft: [1, 1],
        topRight: [2, 1],
        bottomLeft: [1, 2],
        bottomRight: [2, 2],
      },
    };
    expect(getGridVerticesByTileId(state)).toEqual(expected);
  });
});

describe('getRiverBordersByTileId', () => {
  it('should return the river borders by tile id', () => {
    const state = {
      grid: {
        tiles: [['0,0', '1,0'], ['0,1', '1,1']],
        rivers: [
          {
            path: [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]],
          },
        ],
      },
    };
    const expected = {
      '0,0': {
        bottom: false,
        left: false,
        right: true,
        top: true,
      },
      '1,0': {
        bottom: true,
        left: true,
        right: false,
        top: false,
      },
      '0,1': {
        bottom: false,
        left: false,
        right: false,
        top: false,
      },
      '1,1': {
        bottom: false,
        left: false,
        right: true,
        top: true,
      },
    };
    expect(getRiverBordersByTileId(state)).toEqual(expected);
  });
});
