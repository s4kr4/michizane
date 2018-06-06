import React from 'react'

import Header from '../components/Header'
import Editor from '../containers/Editor'
import styled from '../styled-components'

const App = ({ className }) => (
  <div className={className}>
    <Header />
    <Editor />
  </div>
)

export default styled(App)`
  width: 100%;
  height: 100%;
`
