import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Login from './Login';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Signup from './Signup';
import CourseContent from './CourseContent';

function App() {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/courseContent' element={<CourseContent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}



export default App;



