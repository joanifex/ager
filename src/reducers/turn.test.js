import reducer from './turn';

describe('turn reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(1);
  });
  describe('END_TURN', () => {
    it('should increment the turn', () => {
      expect(
        reducer(undefined, {
          type: 'END_TURN',
        }),
      ).toEqual(2);
    });
  });
});
