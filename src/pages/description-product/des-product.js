import React, { useEffect } from "react";
import '../description-product/des-product.css'
import { NewProducts } from '../../containers/index'
import { Navbar } from '../../components/index';
import Footer from "../../components/footer/Footer"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Aos from "aos"
import "aos/dist/aos.css"


function convertValues(in_store, available) {
    if (in_store === true) {
        in_store = 'En tienda';
    } else if (in_store === false){
        in_store = 'No se encuentra en tienda fisica';
    }

    if (available === true){
        available = 'Si'
    }else if(available === false){
        available = 'Agotado'
    }
    return {in_store, available}
}

function DescriptionProduct({ pk_product, name, description, price,
    in_store, available, fk_category_product, size, image}) {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="des-p" >
            <Navbar />
            <div className="title" data-aos= "fade-down">Personaliza tu producto</div>
            <div className="des-p_container">
                <div className="backs"><p><a className="bi-house" href="/"> Inicio/</a><a href="/catalogo">Catalogo/</a><a href="/categoria">Categoria</a></p>
                    <div className="buttonB"><div className='backButton'><i className='bx bxs-left-arrow' ></i></div><a href="catalogo">Volver al catalogo</a></div>
                </div>
                <div className="container_info">
                    <div className="photos-price">
                    <p>Algunos diseños de esta referencia</p> 

                        <div className="container-dot_buttons">
                            <Carousel>
                                <div>
                                    <img src={image[0]} alt="Image1.png" />
                                </div>
                                <div>
                                    <img src={image[1]} alt="Image2.png" />
                                </div>
                            </Carousel>                        
                            </div>
                            <div className="price">${price}</div>
                            </div>

                            <div className="data">
                            <p>{name}</p>
                            <div className="reference">RF: {pk_product}</div>
                            <p> Descripcion </p>
                            <div className="reference">{description}</div>
                            <p> Disponible en tienda </p>
                            <div className="reference">{convertValues(in_store, available).in_store}</div>
                            <p> Producto disponible </p>
                            <div className="reference">{convertValues(in_store, available).available}</div>
                            </div>   
                </div>
                <div className="container_bloque2">¡Personalizame! 👜📝
                <form><input placeholder= "Me gustaría este bolso de color negro y en cuerina" type="text" /></form>
                </div>
                <button>COMPRAR</button>
                </div>
                <NewProducts title= 'Te podría interesar'/>
            <Footer />
        </div>
    )
}

export default DescriptionProduct;