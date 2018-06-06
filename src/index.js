import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/App';
import { injectGlobal } from './styled-components'
import configureStore from './configureStore'

const store = configureStore();

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
