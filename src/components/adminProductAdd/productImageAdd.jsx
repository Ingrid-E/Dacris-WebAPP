import React, {useState, useEffect}from 'react'
import ImageButton from '../adminButtons/imageButton'
import './productImageAdd.css'
import {FileArrowUp} from 'react-bootstrap-icons'

const ProductImageAdd = () => {
    const [images, setImages] = useState([])

    useEffect(()=>{
        console.log(images)
        setImages(images)
    }, [images])

    const fileReader = (url)=> {
        const newImage = images.push(url)
        setImages(newImage)

    }
    return (
        <div className="product_add_images">
            <div className='images_options'></div>
            <div className='images_contaniner'>
                
                {images[0] !== undefined? 
                (<img width="200px" src = {images[0] === undefined? '#': images[0]}></img>)
                :(<div className='images_placeholder'>
                <div className='placeholder_content'>
                <FileArrowUp/>
                <h1>Subir Imagen</h1>
                </div>
            </div>)}
                
            </div>
            <ImageButton text="SUBIR IMAGEN" sendURL={fileReader} />
        </div>
    )
}

export default ProductImageAdd