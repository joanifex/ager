import {
  getVerticesForCoordinates,
  areVerticesBorderingRiver,
} from './gridHelpers';

describe('getVerticesForCoordinates', () => {
  it('should return the vertices for the coordinates', () => {
    const coordinates = [1, 1];
    const expected = {
      topLeft: [1, 1],
      topRight: [2, 1],
      bottomLeft: [1, 2],
      bottomRight: [2, 2],
    };
    expect(getVerticesForCoordinates(coordinates)).toEqual(expected);
  });
});

describe('areVerticesBorderingRiver', () => {
  const rivers = [{ path: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]] }];
  it('should return true when vertices are shared with a river', () => {
    const vertices = [[1, 1], [1, 2]];
    expect(areVerticesBorderingRiver({ rivers, vertices })).toBe(true);
  });
  it('should return false when vertices are not shared with a river', () => {
    const vertices = [[0, 2], [1, 2]];
    expect(areVerticesBorderingRiver({ rivers, vertices })).toBe(false);
  });
});
