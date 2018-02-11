import reducer from './foodProduced';

describe('foodProduced reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0);
  });
  describe('CREATE_POPULATION', () => {
    it('should reduce the food', () => {
      expect(
        reducer(3, {
          type: 'END_TURN',
        }),
      ).toEqual(0);
    });
  });
  describe('END_TURN', () => {
    const endTurnAction = {
      type: 'END_TURN',
    };
    it('should reduce the food by three', () => {
      expect(reducer(3, endTurnAction)).toEqual(0);
    });
    it('should floor at zero', () => {
      expect(reducer(2, endTurnAction)).toEqual(0);
    });
  });
});
