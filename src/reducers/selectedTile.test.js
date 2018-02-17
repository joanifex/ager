import reducer from './selectedTile';

describe('selected tile reducer', () => {
  it('should return the initial state', () => {
    const initialState = null;
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  describe('SELECT_TILE', () => {
    it('should select the given tile', () => {
      const selectTileAction = { type: 'SELECT_TILE', tileId: '0' };
      expect(reducer(undefined, selectTileAction)).toEqual('0');
    });
  });
  describe('START_NEW_GAME', () => {
    it('should return the initial state of null', () => {
      const startNewGameAction = { type: 'START_NEW_GAME' };
      expect(reducer('0', startNewGameAction)).toEqual(null);
    });
  });
});
