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
  it('should return the end turn data', () => {
    const newState = {
      ...state,
      populations: {
        byId: {
          0: { id: '0', populating: '0' },
        },
      },
    };
    const expected = {
      foodProduction: 1,
      populationLoss: false,
      isGameLoss: false,
    };
    expect(getEndTurnData(newState)).toEqual(expected);
  });
  it('should determine a population loss', () => {
    const newState = {
      ...state,
      populations: {
        byId: {
          0: { id: '0', populating: null },
          1: { id: '1', populating: null },
        },
      },
    };
    const expected = {
      foodProduction: -2,
      populationLoss: true,
      isGameLoss: false,
    };
    expect(getEndTurnData(newState)).toEqual(expected);
  });
  it('should determine a game loss', () => {
    const expected = {
      foodProduction: -1,
      populationLoss: true,
      isGameLoss: true,
    };
    expect(getEndTurnData(state)).toEqual(expected);
  });
});
