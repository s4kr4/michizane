import { createStore, combineReducers } from 'redux'

import Editor from './modules/Editor'

const rootReducer = combineReducers({
  Editor,
})

export default function configureStore() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  return store
}
