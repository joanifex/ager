import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export default connect(({ food }) => ({
  food
}))(Stats);
