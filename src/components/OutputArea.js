import React from 'react'

import styled from '../styled-components'

const OutputArea = ({ className, output }) => (
  <div className={className}>
    {output}
  </div>
)

export default styled(OutputArea)`
  padding: 10px;
  max-width: 50%;
  min-width: 50%;
  overflow-wrap: break-word;
`
