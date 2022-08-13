import React, { useEffect } from "react";
import '../sales-points/sales.css'
import { Navbar} from '../../components/index';
import Footer from "../../components/footer/Footer"
import Aos from "aos"
import sur from "../../assets/sur.png"
import location from "../../assets/location.png"
import norte from "../../assets/norte.png"
import line from "../../assets/lineSales.svg"
import "aos/dist/aos.css"

function Sales() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className="sales" >
            <Navbar />
            <div className="title"> <img src={location} alt="location">
            </img> ¿Donde estamos ubicados?! <img src={location} alt="location">
                </img></div>
            <div className="sales_container">
                <div className="container_info">
                    <img className="image" data-aos="fade-up" src={sur} alt="Sede Sur"></img>
                    <div className="info_text">
                        <p>Ohlala Sede Sur</p>
                        <p>Pasoancho Cra 64a</p>
                        <p>Cali, Colombia</p>
                    </div>
                    <iframe title="My Daily Marathon Tracker" data-aos="fade-up" className="round" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.9243791028398!2d-76.53712528543365!3d3.4013285859838818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1c3d79085b1%3A0xadf3f69c1b0a0027!2sOh%20Lala%20Beauty%20Bar%20Sur!5e0!3m2!1ses!2sco!4v1660249811042!5m2!1ses!2sco"}
                        width="350" height="350" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <img className="imageline" src={line} alt="line"></img>
                <div className="container_info">
                    <img className="image" data-aos="fade-up" src={norte} alt="Sede Norte"></img>
                    <div className="info_text">
                        <p>Ohlala Sede Norte</p>
                        <p>Avenida sexta con 28</p>
                        <p>Cali, Colombia</p>
                    </div>
                    <iframe title="My Daily Marathon Tracker" data-aos="fade-up" className="round" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5052303170937!2d-76.53023035038811!3d3.4695878520560672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6165d01b173%3A0xded38f58005e3a5e!2sAv.%206%20Nte.%20%2328%20Norte%2024%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1660250613954!5m2!1ses-419!2sco"}
                        width="350" height="350" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Sales;