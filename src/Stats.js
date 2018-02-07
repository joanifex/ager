import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Stats = (({food, safety, wealth}) => (
  <header>
    {food}, {safety}, {wealth}
  </header>
));

Stats.defaultProps = {
  food: 0,
  safety: 0,
  wealth: 0,
};

Stats.propTypes = {
  food: PropTypes.number.isRequired,
  safety: PropTypes.number.isRequired,
  wealth: PropTypes.number.isRequired,
};

export default connect(({food, safety, wealth}) => (
  {food, safety, wealth}
))(Stats);


