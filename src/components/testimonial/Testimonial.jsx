import React from 'react'
import './testimonial.css'
import quoteImage from '../../assets/quote.png'

const Testimonial = ({name, text}) => {
  return (
    <div className='dacris__testimonial'>
        <h1>{name}</h1>
        <p>{text}</p>
        <img className='dacris__testimonial-image' src={quoteImage} alt="quote.png" />
        <img className='dacris__testimonial-image' src={quoteImage} alt="quote.png" />
    </div>
  )
}

export default Testimonial