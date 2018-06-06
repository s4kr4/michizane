const INPUT_TEXT = 'INPUT_TEXT'

const initialState = {
  value: ''
}

export function inputText(value) {
  return ({
    type: INPUT_TEXT,
    value,
  })
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
