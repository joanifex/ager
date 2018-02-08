import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFoodProduction } from '../selectors';

export const Stats = ({ availablePopulations, foodProduction, foodStored }) => (
  <header>
    <ul>
      <li>Available Population: {availablePopulations}</li>
    </ul>
    <ul>
      <li>Food Stored: {foodStored}</li>
    </ul>
    <ul>
      <li>Food Production: {foodProduction}</li>
    </ul>
  </header>
);

Stats.defaultProps = {
  availablePopulations: 0,
  foodProduction: 0,
  foodStored: 0
};

Stats.propTypes = {
  availablePopulations: PropTypes.number.isRequired,
  foodProduction: PropTypes.number.isRequired,
  foodStored: PropTypes.number.isRequired
};

export default connect(state => ({
  availablePopulations: state.populations.reduce(
    (sum, population) => (population.populating === null ? sum + 1 : sum),
    0
  ),
  foodProduction: getFoodProduction(state),
  foodStored: state.food
}))(Stats);
