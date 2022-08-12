import React from 'react'
import './catalogs.css'

const Catalogs = () => {
  return (
    <div className='dacris__catalogs'>
        <h1 className='dacris__catalogs-title'>Conoce nuestros catalogos</h1>
        <div className='dacris__catalogs-buttons'>
            <a className='dacris__catalogs-buttons-button' href="#">para hombre</a>
            <a className='dacris__catalogs-buttons-button' href="#">para mujer</a>
        </div>
    </div>
  )
}

export default Catalogs