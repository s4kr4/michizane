import reducer, {
  initialState,
  INPUT_TEXT,
} from '.'

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
      payload: 'normal text',
    }))
      .toEqual({
        output: 'normal text',
      })
  })
})

