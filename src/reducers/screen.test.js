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
    it('should change to win screen when game is won', () => {
      const endTurnAction = {
        type: 'END_TURN',
        isGameWin: true,
      };
      expect(reducer(undefined, endTurnAction)).toEqual('win');
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
  describe('START_NEW_GAME', () => {
    it('should change to the game screen', () => {
      const startNewGameAction = {
        type: 'START_NEW_GAME',
        newScreen: 'game',
      };
      expect(reducer(undefined, startNewGameAction)).toEqual('game');
    });
  });
});
