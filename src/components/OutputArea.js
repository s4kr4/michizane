import React from 'react'

import styled from '../styled-components'

const OutputArea = ({ className, output }) => {
  const displayString = output.split('\n').map((row, i) => (
    <span key={i}>
      {row}
      <br />
    </span>
  ))

  return (
    <div className={className}>
      <div className="output">{displayString}</div>
    </div>
  )
}

export default styled(OutputArea)`
  max-width: 50%;
  min-width: 50%;

  .output {
    box-sizing: border-box;
    padding: 10px;
    overflow-wrap: break-word;
  }
`
