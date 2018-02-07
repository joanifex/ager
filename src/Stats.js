import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Stats = ({ availablePopulations, food }) => (
  <header>
    <ul>
      <li>Available Population: {availablePopulations}</li>
    </ul>
    <ul>
      <li>Food: {food}</li>
    </ul>
  </header>
);

Stats.defaultProps = {
  availablePopulations: 0,
  food: 0
};

Stats.propTypes = {
  availablePopulations: PropTypes.number.isRequired,
  food: PropTypes.number.isRequired
};

export default connect(({ populations }) => ({
  availablePopulations: populations.reduce(
    (sum, population) => (population.populating === null ? sum + 1 : sum),
    0
  )
}))(Stats);
