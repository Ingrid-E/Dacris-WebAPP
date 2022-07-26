import React from 'react'
import ImageButton from '../adminButtons/imageButton'
import './productImageAdd.css'
import {FileArrowUp} from 'react-bootstrap-icons'

const ProductImageAdd = () => {
    return (
        <div className="product_add_images">
            <div className='images_options'></div>
            <div className='images_contaniner'>
                <div className='images_placeholder'>
                    <div className='placeholder_content'>
                    <FileArrowUp/>
                    <h1>Subir Imagen</h1>
                    </div>
                </div>
            </div>
            <ImageButton text="SUBIR IMAGEN"/>
        </div>
    )
}

export default ProductImageAdd