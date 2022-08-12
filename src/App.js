import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, AboutUs, Login, AdminPage} from "./pages/index"
import './app.css';

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
