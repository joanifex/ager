import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Grid.css';
import Tile from './Tile';

export const Grid = ({ grid }) => (
  <div id="map">
    {grid.map(row => row.map(tile => <Tile key={tile} tileId={tile} />))}
  </div>
);

Grid.defaultProps = {
  grid: [[]],
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(({ grid }) => ({ grid }))(Grid);
