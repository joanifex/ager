import reducer from './populations';

describe('populations reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      byId: {},
      allIds: [],
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  describe('CREATE_POPULATION', () => {
    it('should create a new population', () => {
      const createPopulationAction = {
        type: 'CREATE_POPULATION',
        newPopulation: {
          id: '0',
          populating: null,
        },
      };
      const expected = {
        byId: { 0: { id: '0', populating: null } },
        allIds: ['0'],
      };
      expect(reducer(undefined, createPopulationAction)).toEqual(expected);
    });
  });

  describe('END_TURN', () => {
    it('should remove a population when population lost', () => {
      const initialState = {
        byId: { 0: { id: '0', populating: null } },
        allIds: ['0'],
      };
      const endTurnAction = {
        type: 'END_TURN',
        populationLoss: true,
      };
      const expected = {
        byId: {},
        allIds: [],
      };
      expect(reducer(initialState, endTurnAction)).toEqual(expected);
    });
  });
  describe('POPULATION_POPULATES_TILE', () => {
    it('should populate the tile', () => {
      const initialState = {
        byId: { 0: { id: '0', populating: null } },
      };
      const populationPopulatesTileAction = {
        type: 'POPULATION_POPULATES_TILE',
        populationId: '0',
        tileId: '0',
      };
      const expected = {
        byId: { 0: { id: '0', populating: '0' } },
      };
      expect(reducer(initialState, populationPopulatesTileAction)).toEqual(
        expected,
      );
    });
  });
  describe('POPULATION_DEPOPULATES', () => {
    it('should depopulate the tile', () => {
      const initialState = {
        byId: { 0: { id: '0', populating: '0' } },
      };
      const populationDepopulatesAction = {
        type: 'POPULATION_DEPOPULATES',
        populationId: '0',
      };
      const expected = {
        byId: { 0: { id: '0', populating: null } },
      };
      expect(reducer(initialState, populationDepopulatesAction)).toEqual(
        expected,
      );
    });
  });
});
