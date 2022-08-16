import React from 'react'
import { Button } from '../../components'
import './start.css'

const Start = () => {
  return (
    <div className='dacris__start' id='dacris__start'>
      <div className='dacris__start-banner'>
        <div className='dacris__start-banner-content'>
          <div className='dacris__start-banner-content-box'>
            <h1 className='dacris__start-banner-content-box-title'>Tu estilo a la moda</h1>
            <p className='dacris__start-banner-content-box-text'>Complementa todos tus outfits con nuestros productos</p>
            <div className='dacris__start-banner-content-box-buttons'>
              <Button text='hombre' />
              <Button text='mujer' />
            </div>
          </div>
        </div>
        <div className='dacris__start-banner-image'></div>
      </div>
    </div>
  )
}

export default Start