import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, AboutUs, Login} from "./Pages/index"
import { Navbar, SocialMedia } from './components';
import './app.css'

function App() {
  return (
    <div className="App">
      {/*<Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>*/}
      <Navbar />
      </div>

  );
}

export default App;
