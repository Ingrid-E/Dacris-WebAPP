import React from "react";
import "../home/home.css";
import image from '../../assets/image-home.jpeg';
import NavBar from "../../components/NavBar"
import ButtonsNext from "../../components/ButtonsNext"
import Footer from "../../components/Footer"
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
function Home() {
    return (
        <div className="Home">
            <NavBar />
            <Helmet><title>Inicio</title> </Helmet>
            <div className="frame1">
                <h1>Tu estilo a la moda</h1>
                <div className="mont">
                    Complementa todos tus outfits con nuestros productos
                </div>
                <Button href="hombre" style= {{fontFamily: 'League Gothic' , fontSize: '40px', width:'150px' , height: '70px'}} className="rounded">Hombre</Button>
                <Button href="mujer" style= {{fontFamily: 'League Gothic' , fontSize: '40px', width:'150px' , height: '70px'}} className="rounded">Mujer</Button>
            </div>
            <div className="frame2"></div>
            <div className="button"><ButtonsNext /></div>
        </div>
        
    )
}

export default Home;