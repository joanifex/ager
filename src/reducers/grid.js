const initialState = {
  tiles: [],
  rivers: [],
};

export default function gridReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_NEW_GAME':
      return action.grid;
    default:
      return state;
  }
}
