import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Search from './components/search';
import Signup from './components/signup';
import Movies from './components/movies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/movie' element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
