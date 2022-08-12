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
                <ProductCard path='../../assets/aboutUs-slide2-image1.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
                <ProductCard path='../../assets/aboutUs-slide2-image1.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
                <ProductCard path='../../assets/aboutUs-slide2-image1.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
                <ProductCard path='../../assets/aboutUs-slide2-image1.jpeg' productName='Dakar con tapa' productPrice='$50.000' />
            </div>
            <div className='dacris__newProducts-slider-button'><i className='bx bxs-right-arrow'></i></div>
        </div>
    </div>
  )
}

export default NewProducts