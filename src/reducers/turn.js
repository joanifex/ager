const initialState = 1;

export default function turnReducer(state = initialState, action) {
  switch (action.type) {
    case 'END_TURN':
      return state + 1;
    case 'START_NEW_GAME':
      return initialState;
    default:
      return state;
  }
}
