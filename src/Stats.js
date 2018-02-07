import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import tileData from './data/tiles';

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

export default connect(({ populations, tiles }) => ({
  availablePopulations: populations.reduce(
    (sum, population) => (population.populating === null ? sum + 1 : sum),
    0
  ),
  foodProduction: populations.reduce(
    (sum, population) =>
      population.populating
        ? sum +
          tileData[tiles.find(tile => tile.id === population.populating).type]
            .food
        : sum,
    0
  ),
  foodStored: 0
}))(Stats);
