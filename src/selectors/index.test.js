import { getFoodProduction, getEndTurnData, getScore } from './index';

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
        0: { id: '0', populating: '0' },
      },
    },
    tiles: {
      byId: {
        0: { type: 'grass' },
      },
    },
  };
  it('should return the end turn data', () => {
    const expected = {
      foodProduction: 1,
      populationLoss: false,
      isGameLoss: false,
      isGameWin: false,
    };
    expect(getEndTurnData(state)).toEqual(expected);
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
      isGameWin: false,
    };
    expect(getEndTurnData(newState)).toEqual(expected);
  });
  it('should determine a game loss', () => {
    const newState = {
      ...state,
      populations: {
        byId: {
          0: { id: '0', populating: null },
        },
      },
    };
    const expected = {
      foodProduction: -1,
      populationLoss: true,
      isGameLoss: true,
      isGameWin: false,
    };
    expect(getEndTurnData(newState)).toEqual(expected);
  });
  it('should determine a game win', () => {
    const newState = {
      ...state,
      turn: 16,
    };
    const expected = {
      foodProduction: 1,
      populationLoss: false,
      isGameLoss: false,
      isGameWin: true,
    };
    expect(getEndTurnData(newState)).toEqual(expected);
  });
});

describe('getScore', () => {
  it('should give the score', () => {
    const state = {
      populations: {
        byId: {
          0: 'population',
          1: 'population',
        },
        allIds: ['0', '1'],
      },
    };
    const expected = 50;
    expect(getScore(state)).toEqual(expected);
  });
});
