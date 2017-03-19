import NotesIndex from './notes_index';
// import { logout } from '../../actions/session_actions';
// import { setMode, addNote } from '../../actions/navigation_actions';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = state => ({
  notes: state.notes,
  display: state.display,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
