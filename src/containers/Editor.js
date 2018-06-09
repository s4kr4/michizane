import { connect } from 'react-redux'

import * as editorModule from '../modules/Editor'
import Editor from '../components/organisums/Editor'

const mapStateToProps = state => ({
  input: state.Editor.input,
  output: state.Editor.output,
})

const mapDispatchToProps = dispatch => ({
  inputText: value => dispatch(editorModule.inputText(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor)
