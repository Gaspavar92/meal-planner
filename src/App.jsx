import { useState } from 'react'
import Exercise from '../components/Exercise';
import './App.css'

function App() {

  const [muscle, setMuscle] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleExerciseSubmission = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setMuscle(data.get('muscle'));
    setDifficulty(data.get('difficulty'));
  }

  const openHeader = (e) => {
    e.stopPropagation();
    const header = e.currentTarget.parentElement;
    const button = e.currentTarget;
    const form = e.currentTarget.previousSibling;
    form.classList.toggle('show-form');
    header.classList.toggle('expanded');
    button.classList.toggle('rotate');
  };

  return (
    <>
      <header>
        <form onSubmit={handleExerciseSubmission}>
          <label htmlFor="muscle">Muscle:</label>
          <input type="text" name='muscle' id='muscle' />
          <label htmlFor="difficulty">Difficulty:</label>
          <select name="difficulty" id="difficulty">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          <button type='submit'>SUBMIT</button>
        </form>
      <button className='arrow-down' onClick={openHeader}>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      </header>
      {muscle && difficulty && <Exercise muscle={muscle} level={difficulty}/>}
    </>
  )
}

export default App;
