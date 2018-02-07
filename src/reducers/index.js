import { combineReducers } from 'redux';
import food from './food';
import safety from './safety';
import tiles from './tiles';
import wealth from './wealth';

export default combineReducers({
  food,
  safety,
  tiles,
  wealth,
});
