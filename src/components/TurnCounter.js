import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const TurnCounter = ({ turn }) => <span>Turn {turn}</span>;

TurnCounter.defaultProps = { turn: 0 };

TurnCounter.propTypes = {
  turn: PropTypes.number.isRequired,
};

export default connect(({ turn }) => ({ turn }))(TurnCounter);
