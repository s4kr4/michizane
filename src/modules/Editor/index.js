import { translate } from './processor'

export const INPUT_TEXT = 'INPUT_TEXT'
export const CHANGE_TRANSLATE_MODE = 'CHANGE_TRANSLATE_MODE'

export const TranslateMode = {
  QIITA_TO_GITHUB: 'QIITA_TO_GITHUB',
  GITHUB_TO_QIITA: 'GITHUB_TO_QIITA',
}

export const inputText = input => ({
  type: INPUT_TEXT,
  payload: input,
})

export const changeTranslateMode = mode => ({
  type: CHANGE_TRANSLATE_MODE,
  payload: mode,
})

export const initialState = {
  translateMode: TranslateMode.QIITA_TO_GITHUB,
  output: '',
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      const output = translate(action.payload, state.translateMode)

      return {
        ...state,
        output: output,
      }

    default:
      return state
  }
}
