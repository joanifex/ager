import {
  createPopulation,
  endTurn,
  populationDepopulates,
  populationPopulatesTile,
  screenChange,
  startNewGame,
} from './index';

describe('endTurn', () => {
  it('should create an action to end the turn', () => {
    const endTurnData = {
      foodProduction: 0,
      populationLoss: false,
    };
    const expectedAction = {
      type: 'END_TURN',
      ...endTurnData,
    };
    expect(endTurn(endTurnData)).toEqual(expectedAction);
  });
});

describe('createPopulation', () => {
  it('should create an action to create a population', () => {
    const expectedAction = {
      type: 'CREATE_POPULATION',
    };
    expect(createPopulation()).toEqual(expectedAction);
  });
});

describe('populationDepopulates', () => {
  it('should create an action for a population to depopulate ', () => {
    const populationId = 0;
    const expectedAction = {
      type: 'POPULATION_DEPOPULATES',
      populationId,
    };
    expect(populationDepopulates({ populationId })).toEqual(expectedAction);
  });
});

describe('populationPopulatesTile', () => {
  it('should create an action for a population to populate a tile ', () => {
    const populateData = {
      populationId: 0,
      tileId: 0,
    };
    const expectedAction = {
      type: 'POPULATION_POPULATES_TILE',
      ...populateData,
    };
    expect(populationPopulatesTile(populateData)).toEqual(expectedAction);
  });
});

describe('startNewGame', () => {
  it('should create an action to start a new game', () => {
    const expected = { type: 'START_NEW_GAME', newScreen: 'game' };
    expect(startNewGame()).toEqual(expected);
  });
});

describe('screenChange', () => {
  it('should create an action for a screen change', () => {
    const newScreen = 'game';
    const expected = {
      type: 'SCREEN_CHANGE',
      newScreen,
    };
    expect(screenChange({ newScreen })).toEqual(expected);
  });
});
