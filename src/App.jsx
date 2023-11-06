import { useState } from 'react'
import {
  Link,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'
import Exercise from '../components/Exercise';
import Meal from '../components/Meal';
import ExerciseForm from '../components/ExerciseForm';
import MealForm from '../components/MealForm';
import SignUp from '../components/SignUp';
import Instructions from '../components/Instructions'

function App() {

  const [muscle, setMuscle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [query, setQuery] = useState('');

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get('muscle')) {
      setMuscle(data.get('muscle'));
      setDifficulty(data.get('difficulty'));
    } else {
      setQuery(data.get('meal'));
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
        <li className='icon-container'>
          <Link to="/"><i className="fa-solid fa-house-user icon"></i>Home</Link>
        </li>
        <li className='icon-container'>
          <Link to="/instructions"><i className="fa-solid fa-scroll icon"></i>Instructions</Link>
        </li>
        <li className='icon-container'>
          <Link to="/meal-planner"><i className="fa-solid fa-utensils icon"></i>Meal Planner</Link>
        </li>
        <li className='icon-container'>
          <Link to="/exercises"><i className="fa-solid fa-dumbbell icon"></i>Exercises</Link>
        </li>
      </nav>
    </header>

      <div className='form-section'>
        <form onSubmit={handleFormSubmission} className='main-form'>
          <Routes>
            <Route path='/exercises' element={<ExerciseForm />} />
            <Route path='/meal-planner' element={<MealForm />} />
          </Routes>
          <button type='submit' className='button'>SUBMIT</button>
        </form>

        <button className='arrow-down' onClick={openHeader}>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>

      <nav className="personal">
        <li>
          <Link to="/personal"><i className="fa-solid fa-user"></i><span className="personal-text">My Stats</span></Link>
        </li>
        <li>
          <Link to="/week"><i className="fa-solid fa-calendar-week"></i><span className="personal-text">My Week</span></Link>
        </li>
        <li>
          <Link to="/register"><i className="fa-solid fa-right-to-bracket"></i><span className="personal-text">Register</span></Link>
        </li>
      </nav>
      
      <Routes>
        <Route path='/instructions' element={<Instructions />} />
        <Route path='/exercises' element={<Exercise muscle={muscle} level={difficulty}/>} />
        <Route path='/meal-planner' element={<Meal query={query}/>} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App;
