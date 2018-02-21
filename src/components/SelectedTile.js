import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAvailablePopulationId } from '../selectors/populationSelectors';
import { getTilesByIdWithPopulators } from '../selectors/index';
import { populationPopulatesTile, populationDepopulates } from '../actions';

export const SelectedTile = ({
  availablePopulationId,
  dispatch,
  populatingPopulationId,
  selectedTile,
}) => (
  <div>
    {selectedTile && (
      <div className="flex flex-column">
        <button
          disabled={!availablePopulationId && !populatingPopulationId}
          onClick={() =>
            dispatch(
              populatingPopulationId
                ? populationDepopulates({
                    populationId: populatingPopulationId,
                  })
                : populationPopulatesTile({
                    populationId: availablePopulationId,
                    tileId: selectedTile,
                  }),
            )
          }
        >
          {populatingPopulationId ? 'Depopulate Tile' : 'Populate Tile'}
        </button>
      </div>
    )}
  </div>
);

SelectedTile.defaultProps = {
  availablePopulationId: null,
  dispatch: () => {},
  populatingPopulationId: null,
  selectedTile: null,
};

SelectedTile.propTypes = {
  availablePopulationId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  populatingPopulationId: PropTypes.string,
  selectedTile: PropTypes.string,
};

export default connect(state => {
  const { selectedTile } = state;
  if (!selectedTile) {
    return {};
  }
  return {
    availablePopulationId: getAvailablePopulationId(state),
    populatingPopulationId: getTilesByIdWithPopulators(state)[selectedTile]
      .populator,
    selectedTile,
  };
})(SelectedTile);
