import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {DescriptionProduct, Catalogue, CatalogueProducts, Categories, Home, Login, AdminPage} from "./pages/index"
import AboutUs from "./pages/aboutus/about-us";
import FrecuentQuestions from "./pages/frequent-questions/frequent-questions";
import Sales from "./pages/sales-points/sales"
import './app.css'
import image  from "./assets/imageA.png";
import image2  from "./assets/imageB.png";



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
          <Route path='/des-product' element={
                      <DescriptionProduct pk_product={399} name= {'Berlin'} 
                      description = {'Mochila estilo Berlin'} price = {84000}
                            in_store = {false} available = {true} fk_category_product = {34} 
                            size = {'U'} image = {[image,image2]} //{image} image2 = {image2}
                      />}/>
        </Routes>
      </Router>
      }
      </div>

  );
}

export default App;
