import React from 'react'

import TextArea from '../atoms/TextArea'
import styled from '../../styled-components'

const OutputArea = ({ className, output }) => {
  return (
    <div className={className}>
      <TextArea value={output} />
    </div>
  )
}

export default styled(OutputArea)`
  width: 50%;
`
