import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/Marca de Agua.png";
import loginSubmit from "../../api/login";
import Button from "../../components/adminButtons/button";
import { PersonFill, EyeFill, EyeSlashFill} from "react-bootstrap-icons";

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [hide, setHide] = useState(true)

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

            <div className="login_textfield">
            <h1>Usuario</h1>
            <PersonFill/>
            <input type="email" className="form-control" onChange={(e) => handleChange(e, "email")} aria-describedby="emailHelp" />
            </div>

          </div>

          <div className="form-group">
            <div className="login_textfield">
            <h1>Contraseña</h1>
            <div onClick={()=> setHide(!hide)}>
              {hide? <EyeFill/>:<EyeSlashFill/>}
            </div>
            <input type={hide?"password":"text"} className="form-control" onChange={(e) => handleChange(e, "password")} >
            </input>
            </div>
          </div>
          
          <Button text="Iniciar sesion" type="submit"/>
          
        </form>
      </div>
    </div>
  )
}



export default Login;