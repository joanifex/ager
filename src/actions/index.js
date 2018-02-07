export const endTurn = ({ foodProduction }) => ({
  type: 'END_TURN',
  foodProduction
});

export const createPopulation = () => ({
  type: 'CREATE_POPULATION'
});

export const populationPopulatesTile = ({ populationId, tileId }) => ({
  type: 'POPULATION_POPULATES_TILE',
  populationId,
  tileId
});

export const populationDepopulatesTile = ({ populationId, tileId }) => ({
  type: 'POPULATION_DEPOPULATES_TILE',
  populationId,
  tileId
});
