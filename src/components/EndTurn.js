import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { endTurn } from '../actions';
import { getEndTurnData } from '../selectors';

export const EndTurn = ({ dispatch, endTurnData }) => (
  <button onClick={() => dispatch(endTurn(endTurnData))}>End Turn</button>
);

EndTurn.defaultProps = {
  dispatch: () => {},
  endTurnData: {}
};

EndTurn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  endTurnData: PropTypes.object.isRequired
};

export default connect(state => ({
  endTurnData: getEndTurnData(state)
}))(EndTurn);
