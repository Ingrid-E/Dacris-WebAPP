import React from 'react'
import Button from '../button/Button'
import './product_card.css'

const ProductCard = ({ path, productName, productPrice }) => {

  return (
    <div className='dacris__productCard'>
        <div className='dacris__productCard-image' style={{backgroundImage: `url(${path})`}}></div>
        <div className='dacris__productCard-info'>
            <h1 className="dacris__productCard-info-name">{productName}</h1>
            <h2 className='dacris__productCard-info-price'>{productPrice}</h2>
        </div>
    </div>
  )
}

export default ProductCard