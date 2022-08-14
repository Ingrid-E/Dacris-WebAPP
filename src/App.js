import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, AdminPage, Login} from "./pages/index"
import AboutUs from "./pages/aboutus/about-us";
import FrecuentQuestions from "./pages/frequent-questions/frequent-questions";
import Sales from "./pages/sales-points/sales"
import './app.css'


function App() {
  return (
    <div className="App">
      {
        <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nosotros' element={<AboutUs/>}/>
          <Route path='/preguntas-frecuentes' element={<FrecuentQuestions/>}/>
          <Route path='/puntos-ventas' element={<Sales/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
      </Router>
      }
      </div>

  );
}

export default App;
