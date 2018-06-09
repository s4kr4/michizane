import reducer, {
  TranslateMode,
  INPUT_TEXT,
} from '.'

describe('Editor reducer(Qiita -> GitHub)', () => {
  const initialState = {
    translateMode: TranslateMode.QIITA_TO_GITHUB,
    input: '',
    output: '',
  }

  it('should be initialState', () => {
    expect(reducer(undefined, {
      type: '@@INIT'
    }))
      .toEqual(initialState)
  })

  it('should output normal text', () => {
    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: 'normal text',
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: 'normal text',
        output: 'normal text',
      })
  })

  it('should translate a line break', () => {
    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: "test\ntest",
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: "test\ntest",
        output: "test  \ntest",
      })
  })
})
