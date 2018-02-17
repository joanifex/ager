import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Start.css';
import { startNewGame } from '../actions';

export const Start = ({ dispatch }) => (
  <div className="start">
    <header>Athena</header>
    <button onClick={() => dispatch(startNewGame())}>Start</button>
  </div>
);

Start.defaultProps = { dispatch: () => {} };
Start.propTypes = { dispatch: PropTypes.func.isRequired };

export default connect()(Start);
