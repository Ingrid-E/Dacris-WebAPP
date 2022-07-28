import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, SocialMedia } from './components';
import './app.css';
import Login from "./pages/login/login";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
      </div>

  );
}

export default App;
