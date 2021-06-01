import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(
  <provider store={store}>
    <App store={store} />
  </provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
