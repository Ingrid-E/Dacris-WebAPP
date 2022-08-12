import React from 'react'
import { Testimonial } from '../../components'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='dacris__testimonials'>
        <h1 className='dacris__testimonials-title'>Experiencias</h1>
        <div className='dacris__testimonials-container'>
            <Testimonial name='Maria Camila' text="Ante' que este Phillie se apague yo te voy a olvidar-dar, yo te voy a olvidar, gyal"/>
            <Testimonial name='Maria Camila' text="Ante' que este Phillie se apague yo te voy a olvidar-dar, yo te voy a olvidar, gyal"/>
            <Testimonial name='Maria Camila' text="Ante' que este Phillie se apague yo te voy a olvidar-dar, yo te voy a olvidar, gyal"/>
        </div>
    </div>
  )
}

export default Testimonials