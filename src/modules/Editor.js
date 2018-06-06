const INPUT_TEXT = 'INPUT_TEXT'

export const inputText = input => ({
  type: INPUT_TEXT,
  input,
})

// Reducer
export default (state = {}, action) => {
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
