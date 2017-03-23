import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote, runCode, logSeed } from '../../actions/note_actions';
import { revealAnswer, editNote } from '../../actions/navigation_actions';
import { submitScore } from '../../actions/note_actions';
import Footer from './footer';

const mapStateToProps = state => ({
  note: state.currentNote,
  footerType: state.navigation.footerType,
  authorId: state.session.currentUser ? state.session.currentUser.id : null
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),
  revealAnswer: id => dispatch(revealAnswer(id)),
  editNote: id => dispatch(editNote()),
  submitScore: id => dispatch(submitScore()),
  runCode: () => dispatch(runCode()),
  logSeed: () => dispatch(logSeed())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
