import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPopulation } from '../actions';

export const CreatePopulation = ({ dispatch, food }) => (
  <button disabled={food < 3} onClick={() => dispatch(createPopulation())}>
    Create Population
  </button>
);

CreatePopulation.defaultProps = {
  food: 0
};

CreatePopulation.propTypes = {
  food: PropTypes.number.isRequired
};

export default connect(({ food }) => ({ food }))(CreatePopulation);
