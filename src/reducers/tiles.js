const initialState = {
  byId: {},
  allIds: [],
};

export default function tileReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_NEW_GAME':
      return action.tiles;
    default:
      return state;
  }
}
