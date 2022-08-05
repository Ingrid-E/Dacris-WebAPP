import React, { useState, useEffect } from 'react'
import ImageButton from '../adminButtons/imageButton'
import './productImageAdd.css'
import { FileArrowUp } from 'react-bootstrap-icons'

const ProductImageAdd = (props) => {
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)
    const {returnImages, state} = props

    useEffect(() => {
    }, [images, index])

    const fileReader = async (url) => {
        await setImages([...images, url])
        returnImages([...images, url])
    }

    return (
        <div className="product_add_images">
            <div className='images_options'></div>
            <div className='images_contaniner'>

                {images[0] !== undefined ?
                    (<div className='images_space'>
                        <img width="200px" src={images[index] === undefined ? '#' : images[index]}></img>
                        <div className='image_index'>
                        {
                            images.map((image, i) => (
                                <button style={index === i? {background: "#115E83"}:{background:"white"}} onClick={()=>setIndex(i)}></button>
                            ))
                        }
                        </div>
                    </div>)
                    : (<div className='images_placeholder' style={state === "error"? {border: "2px dashed red"}:{border: "2px dashed darkgray"}}>
                        <div className='placeholder_content' >
                            <FileArrowUp />
                            <h1>Subir Imagen</h1>
                        </div>
                    </div>)}

            </div>
            <ImageButton text="SUBIR IMAGEN" sendURL={fileReader} />
        </div>
    )
}

export default ProductImageAdd