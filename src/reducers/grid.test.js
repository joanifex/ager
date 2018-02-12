import reducer from './grid';

describe('grid reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      rivers: [],
      tiles: [],
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
