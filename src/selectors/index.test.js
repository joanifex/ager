import {
  getGridTiles,
  getGridRivers,
  getPopulations,
  getTiles,
  getFoodProduction,
  getEndTurnData,
  getGridCoordinatesByTileId,
  getGridVerticesByTileId,
  getRiverBordersByTileId,
} from './index';

describe('getGridTiles', () => {
  it('should return the grid of tiles', () => {
    const tiles = [['tile']];
    const state = {
      grid: { tiles },
    };
    expect(getGridTiles(state)).toEqual(tiles);
  });
});

describe('getPopulations', () => {
  it('should return all populations', () => {
    const state = {
      populations: {
        byId: {
          1: 'test',
          2: 'test',
        },
      },
    };
    const expected = ['test', 'test'];
    expect(getPopulations(state)).toEqual(expected);
  });
});

describe('getGridRivers', () => {
  it('should return all rivers', () => {
    const rivers = [['river']];
    const state = {
      grid: { rivers },
    };
    expect(getGridRivers(state)).toEqual(rivers);
  });
});

describe('getTiles', () => {
  it('should return all tiles', () => {
    const state = {
      tiles: {
        byId: {
          1: 'test',
          2: 'test',
        },
      },
    };
    const expected = ['test', 'test'];
    expect(getTiles(state)).toEqual(expected);
  });
});

describe('getFoodProduction', () => {
  it('should calculate food production', () => {
    const state = {
      populations: {
        byId: {
          0: { id: '0', populating: '0' },
        },
      },
      tiles: {
        byId: {
          0: { type: 'grass' },
        },
      },
    };
    expect(getFoodProduction(state)).toEqual(1);
  });
});

describe('getEndTurnData', () => {
  it('should return the end turn data', () => {
    const state = {
      populations: {
        byId: {
          0: { id: '0', populating: '0' },
        },
      },
      tiles: {
        byId: {
          0: { type: 'grass' },
        },
      },
    };
    const expected = {
      foodProduction: 1,
      populationLoss: false,
    };
    expect(getEndTurnData(state)).toEqual(expected);
  });
  it('should determine a population loss', () => {
    const state = {
      foodProduced: 0,
      populations: {
        byId: {
          0: { id: '0', populating: null },
        },
      },
      tiles: {
        byId: {
          0: { type: 'grass' },
        },
      },
    };
    const expected = {
      foodProduction: -1,
      populationLoss: true,
    };
    expect(getEndTurnData(state)).toEqual(expected);
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
