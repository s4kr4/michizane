import React from 'react'

import styled from '../styled-components'

const OutputArea = ({ className, output }) => (
  <div className={className}>
    <div className="output">
      {output}
    </div>
  </div>
)

export default styled(OutputArea)`
  max-width: 50%;
  min-width: 50%;

  .output {
    box-sizing: border-box;
    padding: 10px;
    overflow-wrap: break-word;
  }
`
