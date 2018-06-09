import React from 'react'

import TextArea from '../atoms/TextArea'
import styled from '../../styled-components'

const InputArea = ({ className, input, handleChange }) => (
  <div className={className}>
    <TextArea value={input} handleChange={handleChange} />
  </div>
)

export default styled(InputArea)`
  width: 50%;
`
