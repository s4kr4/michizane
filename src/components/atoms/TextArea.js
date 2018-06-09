import React from 'react'

import styled from '../../styled-components'

const TextArea = ({ className, value, handleChange }) => (
  <textarea className={className} value={value} onChange={handleChange} />
)

export default styled(TextArea)`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  min-height: 90%;
  resize: none;
  font-family: Inconsolata;
  font-size: 1em;
`
