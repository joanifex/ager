import {
  getPopulations,
  getTiles,
  getFoodProduction,
  getEndTurnData,
} from './index';

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
