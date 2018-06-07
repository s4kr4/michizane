import { connect } from 'react-redux'

import * as editorModule from '../modules/Editor'
import Editor from '../components/Editor'

const mapStateToProps = state => ({
  output: state.Editor.output,
})

const mapDispatchToProps = dispatch => ({
  inputText: value => dispatch(editorModule.inputText(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor)
