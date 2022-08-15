import React, { useEffect } from "react";
import Accordion from "./Accordion";
import '../frequent-questions/frequent-questions.css'
import { Navbar} from '../../components/index';
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
            title: '¿Garantía de un producto?',
            content: `Cada producto cuenta con garantía de 1️⃣ año a partir de la fecha de entrega, aplica para reparación más no cambio del mismo 👜
        `},
        {
            id: 2,
            title: '¿Donde estamos ubicados?',
            content: `Somos una tienda virtual📲, si te gustaría ver nuestros productos de manera física puedes dirigirte a las sedes de la tienda de maquillaje Ohlala Beauty 
            Bar y preguntar por productos de nuestra marca, ahí siempre tenemos stock 🥂`,
            image: image
        },
        {
            id: 3,
            title: 'Personaliza tu producto',
            content: `Tenemos un catálogo con más de 60 referencias y todas son personalizables 😊, puedes escoger color y tipo de material de acuerdo a disponibilidad, 
            esto no tiene ningún costo adicional 💙`
        },
        {
            id: 4,
            title: 'Material de los productos',
            content: `Trabajamos con material sintético nacional (unicolor, rayas, etc) y algunos importados (animal print, algunos otros estampados) de excelente calidad, no se 
            pelan ni se descascaran, por eso te damos garantía de 1 año 💙 `
        }
    ];

    return (
        <div className="frequent-questions" >
            <Navbar />
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