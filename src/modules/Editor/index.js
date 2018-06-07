import { translate } from './processor'

export const INPUT_TEXT = 'INPUT_TEXT'

export const inputText = input => ({
  type: INPUT_TEXT,
  payload: input,
})

export const initialState = {
  output: '',
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      const output = translate(action.payload)

      return {
        ...state,
        output: output,
      }
    default:
      return state
  }
}
