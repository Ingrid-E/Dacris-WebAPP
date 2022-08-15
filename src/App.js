import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Catalogue, CatalogueProducts, Categories, Home, Login} from "./pages/index"
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
          <Route path='/catalogo' element={<Catalogue />}/>
          <Route path='/categorias' element={<Categories />}/>
          <Route path='/productos' element={<CatalogueProducts />}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
      }
      </div>

  );
}

export default App;
