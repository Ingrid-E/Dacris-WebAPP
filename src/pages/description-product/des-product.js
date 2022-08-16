import React, { useEffect } from "react";
import '../description-product/des-product.css'
import { NewProducts } from '../../containers/index'
import { Navbar } from '../../components/index';
import Footer from "../../components/footer/Footer"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Aos from "aos"
import "aos/dist/aos.css"
import { useLocation } from "react-router-dom";
import { getBestSellers } from "../../api";

const DescriptionProduct = () => {
    const product = useLocation().state;
    console.log("NAVIGATE STATE: ", product)

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const changeNumber = (price) => {
        var counter = 0;
        var priceChar = Math.trunc(price).toString();
        var finalPrice = "";


        for (var i = priceChar.length - 1; i >= 0; i--) {
            counter++;
            if (counter % 3 === 0 && i !== 0) finalPrice += priceChar[i] + ".";
            else finalPrice += priceChar[i]
        }

        const showPrice = finalPrice.split("").reverse().join("");
        return showPrice;
    }

    return (
        <div className="des-p" >
            <Navbar />
            <div className="title" data-aos="fade-down">Personaliza tu producto</div>
            <div className="des-p_container">
                <div className="backs"><p><a className="bi-house" href="/"> Inicio/</a><a href="/catalogo">Catalogo/</a><a href="/categoria">Categoria</a></p>
                    <div className="buttonB"><div className='backButton'><i className='bx bxs-left-arrow' ></i></div><a href="catalogo">Volver al catalogo</a></div>
                </div>
                <div className="container_info">

                    <div className="photos-price">
                        <div className="container-dot_buttons">
                            <Carousel>
                                <div className="container-product-images">
                                    <img src={product.images[0].url} alt="Image1.png" />
                                    <h1 className="container-product-price">${changeNumber(product.price)}</h1>
                                </div>
                                <div>
                                    <img src={product.images[0].url} alt="Image2.png" />
                                    <h1>Precio</h1>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="personalizacion_mensaje">
                        <h1 className="mensaje_titulo">¿Como te gustaría tu producto?</h1>
                            <input className="mensaje_input" placeholder="Me gustaría este bolso de color negro y en cuerina" type="text" />
                        <button>COMPRAR</button>
                    </div>
                    </div>
                

                    <div className="price">${changeNumber(product.price)}</div>

                    <div className="data">
                        <p>Algunos diseños de esta referencia</p>
                        <p>{product.name}</p>
                        <div className="reference">RF: {product.pk_product}</div>
                        <p> Descripcion </p>
                        <div className="reference">{product.description}</div>
                        <p> Disponible en tienda </p>
                        <div className="reference">{product.in_store ? 'En tienda' : 'No se encuentra en tienda fisica'}</div>
                        <p> Producto disponible </p>
                        <div className="reference">{product.available ? 'Si' : 'Agotado'}</div>
                    </div>
                
            </div>
            <NewProducts title='Te podría interesar' getProducts={getBestSellers} />
            <Footer />
        </div>
    )
}

export default DescriptionProduct;