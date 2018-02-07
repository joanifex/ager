import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Grid.css'
import Tile from './Tile';

export const Grid = ({ tiles }) => (
  <div id="map">
    {tiles.map(tile => (
      <Tile key={tile.id} tile={tile} />
    ))}
  </div>
);

Grid.defaultProps = {
  tiles: [],
};

Grid.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(({ tiles }) => ({ tiles }))(Grid);
