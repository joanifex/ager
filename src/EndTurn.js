import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const EndTurn = ({ dispatch }) => (
  <button onClick={() => dispatch({ type: 'END_TURN' })}>End Turn</button>
);

EndTurn.defaultProps = {
  dispatch: () => {}
};

EndTurn.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(EndTurn);
