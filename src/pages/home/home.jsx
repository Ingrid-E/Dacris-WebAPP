import React from "react";
import "./home.css";
import { Start, AboutUs, NewProducts, Catalogs, Testimonials, InstagramNews } from '../../containers/index';
import { Navbar, SocialMedia } from '../../components/index';
import Footer from "../../components/footer/Footer"

function Home() {
    return (
        <div className="dacris_home">
            <div className='gradient__bg'>
            <Navbar />
            <SocialMedia />
            </div>
            <Start />
            <AboutUs />
            <NewProducts title='Mas Vendidos' />
            <Catalogs />
            <NewProducts title='Lo Nuevo' />
            <Testimonials />
            <InstagramNews />
            <Footer/>
        </div>

    )
}

export default Home;