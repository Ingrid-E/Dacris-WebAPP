import React from 'react'
import { ProductCard } from '../../components'
import './new_products.css'

const NewProducts = ({title}) => {
  return (
    <div className="dacris__newProducts">
        <div className='dacris__newProducts-header'>
            <div className='dacris__newProducts-header-container'>
                <h1 className='dacris__newProducts-header-container-title'>{title}</h1>
            </div>
        </div>
        <div className="dacris__newProducts-slider">
            <div className='dacris__newProducts-slider-button'><i className='bx bxs-left-arrow' ></i></div>
            <div className='dacris__newProducts-slider-container'>
                <ProductCard path='https://dacrisphotobucket.s3.amazonaws.com/1638977952631-01-1660091328207.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
                <ProductCard path='https://dacrisphotobucket.s3.amazonaws.com/Bag-1660093746096.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
                <ProductCard path='https://dacrisphotobucket.s3.amazonaws.com/MiniBag-1660233757116.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
                <ProductCard path='../../assets/aboutUs-slide2-image1.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
                <ProductCard path='../../assets/aboutUs-slide2-image1.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
            </div>
            <div className='dacris__newProducts-slider-button'><i className='bx bxs-right-arrow'></i></div>
        </div>
        <div className='dacris__newProducts-all'>
            <a class='dacris__newProducts-all-button' href="">ver todos los {title}</a>
        </div>
    </div>
  )
}

export default NewProducts