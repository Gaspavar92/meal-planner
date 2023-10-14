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
    console.log(muscle)
  }

  return (
    <>
      <form onSubmit={handleExerciseSubmission}>
        <label htmlFor="muscle">Muscle:</label>
        <input type="text" name='muscle' id='muscle' />
        <label htmlFor="difficulty">Difficulty:</label>
        <input type="text" name='difficulty' id='difficulty' />
        <button type='submit'>SUBMIT</button>
      </form>
      <Exercise muscle={muscle} level={difficulty}/>
    </>
  )
}

export default App;
