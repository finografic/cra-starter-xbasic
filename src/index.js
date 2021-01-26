// POLYFILLS
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// BASE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  const App = require('./containers/App').default;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    MOUNT_NODE
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/App', render);
}

serviceWorker.unregister();
