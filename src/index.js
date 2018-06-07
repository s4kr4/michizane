import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import { injectGlobal } from './styled-components'
import configureStore from './configureStore'

const store = configureStore()

injectGlobal`
  @font-face {
    font-family: 'Inconsolata';
    src: url('./fonts/Inconsolata-Regular.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,body,#root {
    height: 100%;
    font-family: Inconsolata;
    font-size: 1em;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
