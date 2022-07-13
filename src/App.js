import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, AboutUs, Login, Products} from "./pages/index"
import { Navbar, SocialMedia } from './components';
import './app.css'


function App() {
  return (
    <div className="App">
      <Products></Products>
      </div>

  );
}

export default App;
