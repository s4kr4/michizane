import React from 'react'

export default class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.inputText(event.currentTarget.value)
  }

  render() {
    return (
      <div>
        <textarea value={this.props.value} onChange={this.handleChange} />
      </div>
    )
  }
}
