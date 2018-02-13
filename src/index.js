import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './components/App';
import createPopulationMiddleware from './middleware/createPopulationMiddleware';

import { createInitialGrid } from './helpers/gridHelpers';
import { createInitialPopulations } from './helpers/populationHelpers';
import { createInitialTiles } from './helpers/tileHelpers';
import { getTiles } from './selectors';

const populations = createInitialPopulations();
const tiles = createInitialTiles();
const grid = createInitialGrid(getTiles({ tiles }));
console.log(grid);
const initialState = { populations, tiles, grid };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      initialState,
      composeEnhancers(applyMiddleware(createPopulationMiddleware)),
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);
