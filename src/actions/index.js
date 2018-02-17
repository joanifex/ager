export const createPopulation = () => ({
  type: 'CREATE_POPULATION',
});

export const endTurn = endTurnData => ({
  type: 'END_TURN',
  ...endTurnData,
});

export const populationDepopulates = ({ populationId }) => ({
  type: 'POPULATION_DEPOPULATES',
  populationId,
});

export const populationPopulatesTile = ({ populationId, tileId }) => ({
  type: 'POPULATION_POPULATES_TILE',
  populationId,
  tileId,
});

export const restart = () => ({
  type: 'RESTART',
});

export const screenChange = ({ newScreen }) => ({
  type: 'SCREEN_CHANGE',
  newScreen,
});
