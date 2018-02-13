import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Grid.css';
import Tile from './Tile';

export const Grid = ({ tiles }) => (
  <div id="center">
    <div id="grid">
      {tiles.map(row => row.map(tile => <Tile key={tile} tileId={tile} />))}
    </div>
  </div>
);

Grid.defaultProps = {
  tiles: [[]],
};

Grid.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(({ grid: { tiles } }) => ({ tiles }))(Grid);
