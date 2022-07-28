import React from "react";
import {Helmet} from "react-helmet";
import { Button } from 'react-bootstrap';
import "./login.css";

import logo from "./img/Marca de Agua.png";
import portada from "./img/FOTO FERIA 2.png";
//import "./css/bootstrap.min.css";

function Login(){
    return(
        <>

        <helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <script src="js/jquery-1.11.3.min.js"/>
            <script src="js/bootstrap.min.js"/>
            <script src="js/script.js"/>
        </helmet>

         <div id="mainImg">
            <img src={portada} id="imgPr"/>
         </div>
  
  <section id="agua">
    <img src={logo} id="marAgua"/>
  </section>
  
  <section id="login">
    <h2>Iniciar Sesión</h2>
    <form className="verificar">
      <div className="form-group">
        <label for="exampleInputEmail1" id="user">Usuario</label>
        <input type="email" className="form-control" id="user" aria-describedby="emailHelp"/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1" id="password">Contraseña</label>
        <input type="password" className="form-control" id="password"/>
      </div>
      <button id="iniciar" type="submit" className="btn btn-primary">Iniciar sesion</button>
    </form>
  </section>
</>
    )
}

export default Login;