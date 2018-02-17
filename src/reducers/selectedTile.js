const initialState = null;

export default function selectedTileReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_TILE':
      return action.tileId;
    case 'START_NEW_GAME':
      return initialState;
    default:
      return state;
  }
}
