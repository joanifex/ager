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
