import {
  getPopulations,
  getAvailablePopulationId,
} from './populationSelectors';

describe('getPopulations', () => {
  it('should return all populations', () => {
    const state = {
      populations: {
        byId: {
          1: 'test',
          2: 'test',
        },
      },
    };
    const expected = ['test', 'test'];
    expect(getPopulations(state)).toEqual(expected);
  });
});

describe('getAvailablePopulationId', () => {
  it('returns the id of a population not populating a tile', () => {
    const state = {
      populations: {
        byId: {
          0: { id: '0', populating: '0' },
          1: { id: '1', populating: null },
        },
      },
    };
    const expected = '1';
    expect(getAvailablePopulationId(state)).toEqual(expected);
  });
});
