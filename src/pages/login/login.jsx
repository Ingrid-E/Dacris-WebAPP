import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/Marca de Agua.png";
import loginSubmit from "../../api/login";
import Button from "../../components/adminButtons/button";


const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const validate = async (e) => {
    e.preventDefault();
    const response = await loginSubmit(user);
    if(response.success) navigate("/admin", {state: user})
  };

  const handleChange = (e, name) => {
    setUser({ ...user, [name]: e.target.value })
  }


  return (
   
    <div className="login">
      <div className="portada"></div>
      <div className="loginRight">
        <img src={logo} className="logo" />
        <h2>Iniciar Sesión</h2>
        <form className="verificar" onSubmit={(e) => validate(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Usuario</label>
            <input type="email" className="form-control" onChange={(e) => handleChange(e, "email")} aria-describedby="emailHelp" />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input type="password" className="form-control" onChange={(e) => handleChange(e, "password")} />
          </div>
          
          <Button text="Iniciar sesion" type="submit"/>
          
        </form>
      </div>
    </div>
  )
}



export default Login;