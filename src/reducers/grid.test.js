import reducer from './grid';

describe('grid reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      rivers: [],
      tiles: [],
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  describe('START_NEW_GAME', () => {
    it('should return the new grid', () => {
      const grid = { tiles: [], rivers: [] };
      const startNewGameAction = {
        type: 'START_NEW_GAME',
        grid,
      };
      expect(reducer(undefined, startNewGameAction)).toEqual(grid);
    });
  });
});
