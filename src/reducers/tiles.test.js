import reducer from './tiles';

describe('tiles reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      byId: {},
      allIds: [],
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
