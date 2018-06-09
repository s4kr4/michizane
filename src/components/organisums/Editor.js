import React from 'react'

import InputArea from '../molecules/InputArea'
import OutputArea from '../molecules/OutputArea'
import styled from '../../styled-components'

class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.inputText(event.currentTarget.value)
  }

  render() {
    return (
      <div className={this.props.className}>
        <InputArea handleChange={this.handleChange} />
        <OutputArea output={this.props.output} />
      </div>
    )
  }
}

export default styled(Editor)`
  display: flex;
  width: 100%;
  height: 100%;
`
