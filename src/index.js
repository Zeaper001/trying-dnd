import React from 'react';
import ReactDOM from 'react-dom';
import './assets/bundle/bundle.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
