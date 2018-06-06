import React from 'react'

import styled from '../styled-components'

const InputArea = ({ className, handleChange }) => (
  <div className={className}>
    <textarea onChange={handleChange} />
  </div>
)

export default styled(InputArea)`
  width: 50%;

  textarea {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    min-height: 90%;
    resize: none;
    font-family: Inconsolata;
    font-size: 1em;
  }
`
