export const createPopulation = () => ({
  type: 'CREATE_POPULATION',
});

export const endTurn = ({ foodProduction, populationLoss }) => ({
  type: 'END_TURN',
  foodProduction,
  populationLoss,
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
