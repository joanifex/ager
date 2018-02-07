import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { endTurn } from './actions';
import { getFoodProduction } from './selectors';

export const EndTurn = ({ dispatch, foodProduction }) => (
  <button onClick={() => dispatch(endTurn({ foodProduction }))}>
    End Turn
  </button>
);

EndTurn.defaultProps = {
  dispatch: () => {},
  foodProduction: 0
};

EndTurn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  foodProduction: PropTypes.number.isRequired
};

export default connect(state => ({ foodProduction: getFoodProduction(state) }))(
  EndTurn
);
