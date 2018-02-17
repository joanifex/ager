import reducer from './tiles';

describe('tiles reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      byId: {},
      allIds: [],
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  describe('START_NEW_GAME', () => {
    it('should return the new tiles', () => {
      const tiles = { byId: {}, allIds: [] };
      const startNewGameAction = {
        type: 'START_NEW_GAME',
        tiles,
      };
      expect(reducer(undefined, startNewGameAction)).toEqual(tiles);
    });
  });
});
