import React from 'react'
import './product_item.css'

const ProductItem = ({ path, name, price }) => {
  return (
    <a href='' className='dacris__product-item'>
        <div className='dacris__product-item-image' style={{backgroundImage: `url(${path})`}}>
            <div className='dacris__product-item-image-overlay'>
                <div className='dacris__product-item-image-overlay-info'>
                    <h1 className='dacris__product-item-image-overlay-info-text'>ver referencia</h1>
                </div>
            </div>
        </div>
        <h1 className='dacris__product-item-name'>{name}</h1>
        <h2 className='dacris__product-item-price'>${price}</h2>
    </a>
  )
}

export default ProductItem