import { connect } from 'react-redux'

import * as editorModule from '../modules/Editor'
import Editor from '../components/Editor'

const mapStateToProps = state => ({
  value: state.value
})

const mapDispatchToProps = dispatch => ({
  inputText: (value) => dispatch(editorModule.inputText(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
