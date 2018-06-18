import reducer, {
  TranslateMode,
  INPUT_TEXT,
} from '../../modules/Editor'

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
    const payload = 'normal text'

    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: payload,
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: payload,
        output: 'normal text',
      })
  })

  it('should translate a line break', () => {
    const payload = 'test\ntest'

    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: payload,
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: payload,
        output: "test  \ntest",
      })
  })

  it('should delete trailing white spaces', () => {
    const payload = '  \n'

    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: payload,
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: payload,
        output: '',
      })
  })

  it('should get syntax name from code block title', () => {
    const payload = '```javascript:test.js\nconsole.log("test")\n```'

    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: payload,
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: payload,
        output: '```javascript\nconsole.log("test")\n```',
      })
  })

  it('should delete filename from code block title', () => {
    const payload = '```:test.js\nconsole.log("test")\n```'

    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: payload,
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: payload,
        output: '```\nconsole.log("test")\n```',
      })
  })

  it('should not translate h1 ~ h6', () => {
    const payload = '# header1\n\n## header2\n\n###### header6'

    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: payload,
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: payload,
        output: '# header1\n\n## header2\n\n###### header6',
      })
  })

  it('should reduce line breaks after h1 ~ h6', () => {
    const payload = '# header1\n\n\n## header2\n\n\n\n###### header6'

    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: payload,
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: payload,
        output: '# header1\n\n## header2\n\n###### header6',
      })
  })

  it('should not translate list items', () => {
    const payload = '* item1\n* item2'

    expect(reducer(initialState, {
      type: INPUT_TEXT,
      payload: payload,
    }))
      .toEqual({
        translateMode: TranslateMode.QIITA_TO_GITHUB,
        input: payload,
        output: '* item1\n* item2',
      })
  })
})
