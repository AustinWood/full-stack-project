import Note from './note';
import { connect } from 'react-redux';
// import { fetchNotes, fetchNote } from '../../actions/note_actions';

const demoNote = {
  question: "You have array of integers. Write a recursive solution to find the sum of the integers.",

  skeleton: `
    <p>function sumRecur(array) {</p>
    <br />
    <p className="code">}</p>
    <br />
    <p className="code">console.log(sumRecur([1, 3, 5, 7, 9, 2, 4, 6, 8]) === 45);</p>
    <p className="code">console.log(sumRecur([-3, 0, 3, 7, 1, 0, -7, 32]) === 33);</p>
    <p className="code">console.log(sumRecur([]) === 0);
  `,

  solution: `
    <p>function sumRecur(array) {</p>
    <p>&nbsp&nbspif (array.length === 0) return 0;</p>
    <p>&nbsp&nbspif (array.length === 1) return array[0];</p>
    <p>&nbsp&nbsplet sum = sumRecur(array.slice(1));</p>
    <p>&nbsp&nbspreturn sum + array[0];</p>
    <p>}</p>
  `
}

const mapStateToProps = state => ({
  note: demoNote
});

const mapDispatchToProps = dispatch => ({
  // requestNotes: () => dispatch(fetchNotes())
  // ,
  // createTodo: todo => dispatch(createTodo(todo)),
  // updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Note);