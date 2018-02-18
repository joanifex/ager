import { getTiles } from './tilesSelectors';

describe('getTiles', () => {
  it('should return all tiles', () => {
    const state = {
      tiles: {
        byId: {
          1: 'test',
          2: 'test',
        },
      },
    };
    const expected = ['test', 'test'];
    expect(getTiles(state)).toEqual(expected);
  });
});
