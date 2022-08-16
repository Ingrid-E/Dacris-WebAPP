import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import logo from '../assets/logoE.png'
import daviplata from '../assets/daviplata.png'
import bancolombia from '../assets/bancolombia.png'
import mercado from '../assets/mercadopago.png'
import insta from '../assets/insta.png'

function Footer() {
  return (
   <div>
    <footer>
        <div className="text-white py-4 bg-light">
        <div className="container">
        <nav className="row">
            <ul className='col-12 col-md-2 list-unstyled'>
            <img src={logo} style={{ width: "80px"}}/>
            </ul>
            <ul className='col-12 col-md-2 list-unstyled'>
            <li className='font-weight-bold mb-2' a href="#">ACERCA DE</li>
            <a href="nosotros"><li className="text-center">Nosotros </li></a>
            <a href="mision"> <li className="text-center">Mision </li></a>
            <a href="vision"><li className="text-center">Vision </li></a>
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'>
                <li className='font-weight-bold mb-2'>INFORMACION</li>
                <a href="preguntas"><li className="text-center">Preguntas frecuentes</li></a>
                <a href="sitio"><li className="text-center">Donde encontrarnos </li></a>
                <a href="contacto"><li className="text-center">Contacto </li></a>
                <a href="comprar"><li className="text-center">Como comprar </li></a>
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'>
                <li className='font-weight-bold mb-2'>MEDIOS DE PAGO</li>
                <img src={bancolombia} style={{ width: "130px"}}/>
                <img src={daviplata} style={{ width: "140px", marginTop:'10px'}}/>
                <img src={mercado} style={{ width: "140px", marginTop:'10px'}}/>
            </ul>
            <ul className='col-12 col-md-2 list-unstyled'> 
                <li className='font-weight-bold mb-2'>SIGUENOS</li>
                <a href="facebook" className="bi-facebook" style={{color:"blue", fontSize:"48px"}}></a>
                <a href="instagram"><li><img src={insta} style={{ width: "50px"}}/></li></a>
            </ul>
            </nav>
        </div>
        </div>
    </footer>
   </div> 

    /*
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <Navbar.Brand href="/"><img src={logo} style={{ width: "50px"}} /></Navbar.Brand>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>*/
  );
}

export default Footer;