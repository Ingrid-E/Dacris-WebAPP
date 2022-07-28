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
          <img src={logo} alt="logo" style={{ width: "80px" }} />
            </div>
            <div className="col-sm">
              <li className='font-weight-bold mb-2' a href="#" >ACERCA DE</li>
              <a href="nosotros"><li>Nosotros </li></a>
              <a href="mision"> <li>Misión </li></a>
              <a href="vision"><li>Visión </li></a>
            </div>
            <div className="col-sm">
              <li className='font-weight-bold mb-2'>INFORMACIÓN</li>
              <a href="/preguntas-frecuentes"><li>Preguntas frecuentes</li></a>
              <a href="sitio"><li>¿Dónde encontrarnos? </li></a>
              <a href="contacto"><li>Contacto </li></a>
              <a href="comprar"><li>¿Cómo comprar? </li></a>
            </div>
            <div className="col-sm">
              <li className='font-weight-bold mb-2'>MEDIOS DE PAGO</li>
              <img src={bancolombia} alt= "bancolombia" style={{ width: "130px", marginLeft: "10px"}} />
              <img src={daviplata} alt= "daviplata" style={{ width: "140px", marginTop: '10px' , marginLeft: "10px"}} />
              <img src={mercado} alt= "mercadop" style={{ width: "140px", marginTop: '10px' }} />
            </div>
            <div className="col-sm">
              <li className='font-weight-bold mb-2'>SIGUENOS</li>
              <a href="https://www.facebook.com/dacris.co" className="bi-facebook" style={{ color: "#3b5998", fontSize: "40px"}}> </a>
              <a href="https://www.instagram.com/dacris.co/?hl=es-la"><li><img src={insta} alt= "instagram" style={{ width: "40px" }} /> </li></a>
              <a href="https://api.whatsapp.com/message/SMCSSCHIC7END1?autoload=1&app_absent=0" className="bi-whatsapp" style={{ color: "#00722e", fontSize: "35px" }}> </a>
            </div>
          </div>
        </div>
        </div>
        );
}

        export default Footer;