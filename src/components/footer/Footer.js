import React from "react";
import logo from '../../assets/logoE.png'
import daviplata from '../../assets/daviplata.png'
import bancolombia from '../../assets/bancolombia.png'
import mercado from '../../assets/mercadopago.png'
import insta from '../../assets/insta.png'
import '../../components/footer/footer.css'


function Footer() {
  return (
      <div className="footerR">
      
        <div className="text-white py-4">
          <div className="row">
          <div className="col-sm">
          <img src={logo} style={{ width: "80px" }} />
            </div>
            <div className="col-sm">
              <li className='font-weight-bold mb-2' a href="#" >ACERCA DE</li>
              <a href="nosotros"><li>Nosotros </li></a>
              <a href="mision"> <li>Mision </li></a>
              <a href="vision"><li>Vision </li></a>
            </div>
            <div className="col-sm">
              <li className='font-weight-bold mb-2'>INFORMACION</li>
              <a href="preguntas"><li>Preguntas frecuentes</li></a>
              <a href="sitio"><li>Donde encontrarnos </li></a>
              <a href="contacto"><li>Contacto </li></a>
              <a href="comprar"><li>Como comprar </li></a>
            </div>
            <div className="col-sm">
              <li className='font-weight-bold mb-2'>MEDIOS DE PAGO</li>
              <img src={bancolombia} style={{ width: "130px", marginLeft: "10px"}} />
              <img src={daviplata} style={{ width: "140px", marginTop: '10px' , marginLeft: "10px"}} />
              <img src={mercado} style={{ width: "140px", marginTop: '10px' }} />
            </div>
            <div className="col-sm">
              <li className='font-weight-bold mb-2'>SIGUENOS</li>
              <a href="facebook" className="bi-facebook" style={{ color: "blue", fontSize: "48px" }}></a>
              <a href="instagram"><li><img src={insta} style={{ width: "50px" }} /></li></a>
            </div>
          </div>
        </div>
        </div>
        );
}

        export default Footer;