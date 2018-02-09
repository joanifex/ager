import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFoodProduction } from '../selectors';
import './Stats.css';

export const Stats = ({
  availablePopulations,
  foodProduction,
  foodStored,
  populations,
  turn,
}) => (
  <div className="row">
    <div className="column">
      <span>Population: {populations}</span>
      <span>Available: {availablePopulations}</span>
    </div>
    <div className="column">
      <span>Food Stored: {foodStored}</span>
      <span>Food Production: {foodProduction}</span>
    </div>
  </div>
);

Stats.defaultProps = {
  availablePopulations: 0,
  foodProduction: 0,
  foodStored: 0,
  populations: 0,
};

Stats.propTypes = {
  availablePopulations: PropTypes.number.isRequired,
  foodProduction: PropTypes.number.isRequired,
  foodStored: PropTypes.number.isRequired,
  populations: PropTypes.number.isRequired,
};

export default connect(state => ({
  availablePopulations: state.populations.reduce(
    (sum, population) => (population.populating === null ? sum + 1 : sum),
    0,
  ),
  foodProduction: getFoodProduction(state),
  foodStored: state.food,
  populations: state.populations.length,
}))(Stats);
