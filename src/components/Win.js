import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Win.css';
import { startNewGame } from '../actions';
import { getScore } from '../selectors';

export const Win = ({ dispatch, score }) => (
  <div className="win">
    <header>You Win</header>
    <p>Score: {score}</p>
    <button onClick={() => dispatch(startNewGame())}>Restart</button>
  </div>
);

Win.defaultProps = { dispatch: () => {}, score: 0 };
Win.propTypes = {
  dispatch: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(state => ({ score: getScore(state) }))(Win);
