import React from "react";
import "./home.css";
import { Start, AboutUs, NewProducts, Catalogs, Testimonials, InstagramNews } from '../../containers/index';
import { Navbar, SocialMedia } from '../../components/index';
import Footer from "../../components/footer/Footer"
import { getBestSellers, getNewestProducts} from "../../api";
function Home() {

    return (
        <div className="dacris_home">
            <div className='gradient__bg'>
            <Navbar />
            <SocialMedia />
            </div>
            <Start />
            <AboutUs />
            <NewProducts title='Mas Vendidos' getProducts={getBestSellers}/>
            <Catalogs />
            <NewProducts title='Lo Nuevo' getProducts={getNewestProducts} />
            <Testimonials />
            <iframe className = "insta_news" src="https://embedsocial.com/api/pro_hashtag/fc1e632d9cb157aa2bbbf5ca2a3af4644783bcfc" title="EmbedSocial widget" frameborder="0" style={{width:'80%', height:'650px', overflowY:'auto', display: 'block', margin: '0 auto'}}></iframe>
            <Footer/>
        </div>

    )
}

export default Home;