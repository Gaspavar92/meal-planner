import { useState } from 'react'
import {
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'
import Exercise from '../components/Exercise';
import Meal from '../components/Meal';
import ExerciseForm from '../components/ExerciseForm';
import MealForm from '../components/MealForm';

function App() {

  const [muscle, setMuscle] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get('muscle')) {
      setMuscle(data.get('muscle'));
      setDifficulty(data.get('difficulty'));
    } else {
      console.log('triggering meal form')
    }
  };

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
      <nav className='header-nav'>
        <li className='icon-container'><Link to="/"><i className="fa-solid fa-house-user icon"></i>Home</Link></li>
        <li className='icon-container'><Link to="/instructions"><i className="fa-solid fa-scroll icon"></i>Instructions</Link></li>
        <li className='icon-container'><Link to="/meal-planner"><i className="fa-solid fa-utensils icon"></i>Meal Planner</Link></li>
        <li className='icon-container'><Link to="/exercises"><i className="fa-solid fa-dumbbell icon"></i>Exercises</Link></li>
      </nav>
    </header>

      <div className='form-section'>
        <form onSubmit={handleFormSubmission}>
          <Routes>
            <Route path='/exercises' element={<ExerciseForm />} />
            <Route path='/meal-planner' element={<MealForm />} />
          </Routes>
          <button type='submit'>SUBMIT</button>
        </form>

        <button className='arrow-down' onClick={openHeader}>
          <i className="fa-solid fa-chevron-down"></i>
        </button>

      </div>
      
      <Routes>
        <Route path='/exercises' element={<Exercise muscle={muscle} level={difficulty}/>} />
        <Route path='/meal-planner' element={<Meal />} />
      </Routes>
    </>
  )
}

export default App;
