import React, { useEffect } from "react";
import Accordion from "./Accordion";
import '../frequent-questions/frequent-questions.css'
import NavBar from "../../components/NavBar"
import Footer from "../../components/footer/Footer"
import Aos from "aos"
import image from "../../assets/a.png"

import "aos/dist/aos.css"

function FrequentQuestions() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const accordionData = [
        {
            id: 1,
            title: '¿Los productos cuentan con garantía?',
            content: `Los productos cuentan con XX días de garantía. 
            La garantía esta ligada a las siguientes condiciones de fallas en el producto, es decir, recibe el producto equivocado.
            material descompuesto y fallas en las costuras.
        `},
        {
            id: 2,
            title: '¿Donde estamos ubicados?',
            content: `Estamos ubicados en tiendas fisicas OhLala Sur y Norte:`,
            image: image
        },
        {
            id: 3,
            title: '¿Puedo personalizar un producto?',
            content: `Puedes personalizar el producto que desees siguiendo los siguientes pasos:
            1. XXXXX
            2. XXXXX
            3. XXXXX`
        },
        {
            id: 4,
            title: '¿En que material estan hechos los productos?',
            content: `Nuestros productos están hechos con materiales biodegradables `
        }
    ];

    return (
        <div className="frequent-questions" >
            <NavBar />
            <div className="title"> Preguntas Frecuentes </div>
            <div className="frequent-questions_container" >
                    <div className="accordion" data-aos= "fade-up">
                        {accordionData.map(({ id,title, content, image }) => (
                            <Accordion id = {id} title={title} content={content} image = {image}/>
                        ))}
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default FrequentQuestions;