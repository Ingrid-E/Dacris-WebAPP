import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, AboutUs, Login} from "./Pages/index"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
