import React from "react";
import '../aboutus/about-us.css'
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import photoA from "../../assets/1erafoto.png"
import photoB from "../../assets/2dafoto.png"
import photoC from "../../assets/photoC.png"
import line from "../../assets/line.png"
import wp from "../../assets/wpSVG.svg"
import insta from "../../assets/instaSVG.svg"
import fb from "../../assets/fbSVG.png"
import NavBar from "../../components/NavBar"
import Footer from "../../components/footer/Footer"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutUs() {

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })

    return (
        <div className="aboutus" >
            <div className="title">
                Sobre nosotros
            </div>
            <div className='top'>
                <div className="container max-w-screen-lg mx-auto">
                    <div className="mt-8">
                        <MediaQuery maxWidth={786}>
                            <NavBar />
                        </MediaQuery>
                        <MediaQuery minWidth={1280}>
                            <NavBar />
                            <div className="frame1">
                                <div className="bloque-text">
                                    <div className="sub-title">Historia</div>
                                    <p>Somos una marca de bolsos y accesorios que trabaja con material
                                        sintético 100% garantizado el cual brinda una excelente calidad a
                                        nuestros productos ya que este material no se pela ni se descascara.
                                    </p><div className="cite">“Somos amantes del cuero, contamos historias a
                                        través de nuestros productos para fortalecer nuestro
                                        compromiso con la innovación y la satisfacción de nuestros clientes.”</div>
                                </div>
                                <img className="image1" src={line}></img>
                                <img className="image2" src={photoA}></img>
                            </div>
                            <div className="frame2">
                                <img className="image3" src={line}></img>
                                <img className="image4" src={photoB}></img>
                                <div className="bloque-text-right">
                                    <div className="sub-title">Nuestro equipo</div>
                                    <div className="p2">Actualmente nuestro equipo de trabajo está
                                        conformado por dos mujeres y tres hombres. Entre ellos, dos
                                        estudiantes universitarios.
                                    </div>
                                </div>
                            </div>
                            <div className="frame1">
                                <div className="bloque-text">
                                    <div className="sub-title">Enfoque social</div>
                                    <p>Somos una marca de bolsos y accesorios que trabaja con material sintetico nacional, evitando el uso de la piel animal.
                                        Buscamos reducir el impacto ambiental negativo haciendo uso también de materiales ecoamigables,
                                        entre los que están el yute, la lona de algodon y el corcho. Con nuestra presencia en el mercado queremos
                                        aportar de forma positiva a la economía de la región y generar empleo a jovenes universitarios y madres cabeza de hogar,
                                        asignandoles labores que puedan realizar labores desde casa permitiendoles desarrollar sus otras actividades de forma asincronica.
                                    </p>
                                    <img className="image5" src={line}></img>
                                    <img className="image6" src={photoC}></img>
                                </div>
                            </div>
                            <div className="contactanos">
                                <div className="sub-title">Contáctanos</div>
                                <div className="redes">
                                    <div className="row">
                                        <div className="col-sm">
                                        <button className="btn btn-default">
                                            <img src={wp}/></button>
                                           <div className="p3"> Vía WhatsApp </div>
                                           <a href="wp" style={{textDecoration: 'none'}}><div className="p3-bold"> +57 318 888 0343 </div></a>
                                        </div>
                                        <div class="col-sm">
                                        <button className="btn btn-default">
                                            <img src={insta} style={{position: 'relative' , right: '10px'}}/></button>
                                            <div className="p3"> Vía Instagram </div>
                                            <a href="insta" style={{textDecoration: 'none'}}><div className="p3-bold"> @dacris.co </div></a>
                                        </div>
                                        <div class="col-sm">
                                        <button className="btn btn-default">
                                            <img src={fb} style={{position: 'relative' , right: '10px'}}/></button>
                                            <div className="p3"> Vía Facebook </div>
                                            <a href="insta" style={{textDecoration: 'none'}}><div className="p3-bold"> Dacris - Tu estilo a la moda </div></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MediaQuery>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;