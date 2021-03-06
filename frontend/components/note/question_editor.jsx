import React from 'react';
import { Editor, EditorState, ContentState,
         convertFromRaw, convertToRaw } from 'draft-js';

class QuestionEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorState(props.question);
    this.focus = () => this.refs.editor.focus();

    this.updateGlobalState = this.updateGlobalState.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setEditorState(nextProps.question);
  }

  componentDidMount() {
    this.refs.editor.focus();
  }

  setEditorState(plainText) {
    if (plainText === null) {
        this.state = {editorState: EditorState.createEmpty()};
    } else {
      const content = ContentState.createFromText(plainText);
      this.state = ({editorState: EditorState.createWithContent(content)});
    }
  }

  updateGlobalState(editorState) {
    this.setState({ editorState });
    const key = this.props.attrKey;
    const val = editorState.getCurrentContent().getPlainText();
    let newState = {};
    newState[key] = val;
    this.props.updateAttr(newState);
  }

  onFocus() {
    const key = this.props.attrKey;
    $("#" + key).css( "background-color", "#1A1B25" );
  }

  onBlur() {
    const key = this.props.attrKey;
    $("#" + key).css( "background-color", "#0A0B1A" );
  }

  render() {
    return (
      <div onClick={this.focus} className="editor-question-container" id={this.props.attrKey}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.updateGlobalState}
          ref="editor"
          onFocus={this.onFocus}
          onBlur={this.onBlur} />
      </div>
    );
  }
}

export default QuestionEditor;
