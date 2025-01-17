import React, { useEffect } from "react";
import '../aboutus/about-us.css'
import photoA from "../../assets/photoA.png"
import photoB from "../../assets/photoB.png"
import photoC from "../../assets/photoC.png"
import wp from "../../assets/wpSVG.svg"
import insta from "../../assets/instaSVG.svg"
import fb from "../../assets/fbSVG.png"
import { Navbar } from '../../components/index';
import Footer from "../../components/footer/Footer"
import Aos from "aos"
import "aos/dist/aos.css"

function AboutUs() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className="aboutus" >
            <Navbar />
            <div className="title">
                Sobre nosotros
            </div>
            <div className="aboutus_container">
                <div data-aos= "fade-up" className="container_info">
                    <div className="info_text">
                        <h1>Historia</h1>
                        <p>Somos una marca de bolsos y accesorios que trabaja con material
                            sintético 100% garantizado el cual brinda una excelente calidad a
                            nuestros productos ya que este material no se pela ni se descascara.
                        </p>
                        <cite>"Somos amantes del cuero, contamos historias a
                            través de nuestros productos para fortalecer nuestro
                            compromiso con la innovación y la satisfacción de nuestros clientes."</cite>
                    </div>
                    <div className="info_image">
                        <img className="image" src={photoA} alt="dani"></img>
                    </div>

                </div>
                <div data-aos= "fade-up" className="container_info">
                    <div className="info_text">
                        <h1>Nuestro equipo</h1>
                        <p>Actualmente nuestro
                            equipo de trabajo está
                            conformado por dos mujeres y tres hombres. Entre ellos, dos
                            estudiantes universitarios.
                        </p>
                    </div>
                    <div className="info_image">
                        <img className="image" src={photoB} alt="daniYman"></img>
                    </div>

                </div>
                <div data-aos= "fade-up" className="container_info">
                    <div className="info_text">
                        <h1>Enfoque social</h1>
                        <p>Somos una marca de bolsos y accesorios que trabaja con material sintetico nacional, evitando el uso de la piel animal. Buscamos reducir el impacto ambiental negativo haciendo uso también de materiales ecoamigables, entre los que están el yute, la lona de algodon y el corcho. Con nuestra presencia en el mercado queremos aportar de forma positiva a la economía de la región y generar empleo a jovenes universitarios y madres cabeza de hogar, asignandoles labores que puedan realizar labores desde casa permitiendoles desarrollar sus otras actividades de forma asincronica.
                        </p>
                    </div>
                    <div className="info_image">
                        <img className="image" src={photoC} alt="sostenimiento"></img>
                    </div>
                </div>
            </div>
            <div className="aboutus_contactanos">
                <h1>Contactanos</h1>
                <div data-aos= "fade-right" className="contactanos_redes">
                    <div className="red">
                        <img src={wp} alt="Whatsapp ICON"></img>
                        <p>Via Whatsapp</p>
                        <a href="https://api.whatsapp.com/message/SMCSSCHIC7END1?autoload=1&app_absent=0">+57 318 888 0343</a>
                    </div>
                    <div className="red">
                        <img src={insta} alt="Instagram ICON"></img>
                        <p>Vía Instagram</p>
                        <a href="https://www.instagram.com/dacris.co/?hl=es-la">@dacris.co</a>
                    </div>
                    <div className="red">
                        <img src={fb} alt="Facebook ICON"></img>
                        <p>Vía Facebook</p>
                        <a href="https://www.facebook.com/dacris.co">Dacris - Tu estilo a la moda</a>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;