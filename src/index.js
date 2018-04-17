import React from 'react';
import ReactDOM from 'react-dom';
import './assets/bundle/bundle.js';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
