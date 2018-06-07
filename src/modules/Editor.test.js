import reducer, {
  initialState,
  INPUT_TEXT,
} from './Editor'

describe('Editor reducer', () => {
  it('should be initialState', () => {
    expect(reducer(undefined, {
      type: '@@INIT'
    }))
      .toEqual(initialState)
  })

  it('should output normal text', () => {
    expect(reducer(undefined, {
      type: INPUT_TEXT,
      input: 'normal text',
    }))
      .toEqual({
        output: 'normal text',
      })
  })
})

