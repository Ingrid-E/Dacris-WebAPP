import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Login} from "./pages/index"
//import { navbar, socialMedia} from './components';
//import ButtonsNext from "./components/buttonNext/ButtonsNext";
import AboutUs from "./pages/aboutus/about-us";
import './app.css'


function App() {
  return (
    <div className="App">
      {
        <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
      }
      </div>

  );
}

export default App;
