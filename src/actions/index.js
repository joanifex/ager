export const createPopulation = () => ({
  type: 'CREATE_POPULATION',
});

export const endTurn = ({
  foodProduction,
  populationLoss,
  isGameLoss,
  isGameWin,
}) => ({
  type: 'END_TURN',
  foodProduction,
  populationLoss,
  isGameLoss,
  isGameWin,
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

export const screenChange = ({ newScreen }) => ({
  type: 'SCREEN_CHANGE',
  newScreen,
});

export const selectTile = ({ tileId }) => ({
  type: 'SELECT_TILE',
  tileId,
});

export const startNewGame = () => ({
  type: 'START_NEW_GAME',
  newScreen: 'game',
});
