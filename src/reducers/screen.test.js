import reducer from './screen';

describe('screen reducer', () => {
  it('should return the initial state', () => {
    const initialState = 'start';
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  describe('END_TURN', () => {
    it('should change to loss screen when game is lost', () => {
      const endTurnAction = {
        type: 'END_TURN',
        isGameLoss: true,
      };
      expect(reducer(undefined, endTurnAction)).toEqual('loss');
    });
  });
  describe('SCREEN_CHANGE', () => {
    it('should change the screen', () => {
      const newScreen = 'game';
      const changeScreenAction = {
        type: 'SCREEN_CHANGE',
        newScreen,
      };
      expect(reducer(undefined, changeScreenAction)).toEqual(newScreen);
    });
  });
});
