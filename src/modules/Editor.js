export const INPUT_TEXT = 'INPUT_TEXT'

export const inputText = input => ({
  type: INPUT_TEXT,
  input,
})

export const initialState = {
  output: '',
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        output: action.input,
      }
    default:
      return state
  }
}
