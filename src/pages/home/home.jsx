import React from "react";
import "../Home/home.css";
import image from '../../Assets/image-home.jpeg';
import NavBar from "../../Components/NavBar"
import ButtonsNext from "../../Components/ButtonsNext"
import Footer from "../../Components/Footer"
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