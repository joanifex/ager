import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import tileData from './data/tiles';

export const Stats = ({ food }) => (
  <header>
    <ul>
      <li>Food: {food}</li>
    </ul>
  </header>
);

Stats.defaultProps = {
  food: 0
};

Stats.propTypes = {
  food: PropTypes.number.isRequired
};

export default connect(({ tiles }) => ({
  food: tiles.reduce(
    (food, tile) => (tile.populated ? food + tileData[tile.type].food : food),
    0
  )
}))(Stats);
