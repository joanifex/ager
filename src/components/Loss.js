import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Loss.css';
import { startNewGame } from '../actions';

export const Loss = ({ dispatch }) => (
  <div className="loss">
    <header>You Lose</header>
    <button onClick={() => dispatch(startNewGame())}>Restart</button>
  </div>
);

Loss.defaultProps = { dispatch: () => {} };
Loss.propTypes = { dispatch: PropTypes.func.isRequired };

export default connect()(Loss);
