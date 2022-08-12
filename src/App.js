import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, AboutUs, Login, AdminPage} from "./pages/index"
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
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
      </Router>
      </div>

  );
}

export default App;
