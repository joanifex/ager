import { combineReducers } from 'redux';
import foodProduced from './foodProduced';
import populations from './populations';
import tiles from './tiles';
import turn from './turn';

export default combineReducers({
  foodProduced,
  populations,
  tiles,
  turn,
});
