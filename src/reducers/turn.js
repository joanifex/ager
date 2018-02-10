export default function turnReducer(state = 1, action) {
  switch (action.type) {
    case 'END_TURN':
      return state + 1;
    default:
      return state;
  }
}
