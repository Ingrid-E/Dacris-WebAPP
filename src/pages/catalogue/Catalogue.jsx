import React from 'react'
import { Navbar, Footer } from '../../components'
import "./catalogue.css"

const Catalogue = () => {
  return (
    <div className='dacris__catalogue'>
        <Navbar />
        <div className='dacris__catalogue-content'>
          <h1 className='dacris__catalogue-content-title'>Catalogo</h1>
          <div className='dacris__catalogue-content-buttons'>
              <a className='dacris__catalogue-content-buttons-button' href=""><div><h1>Hombre</h1></div></a>
              <a className='dacris__catalogue-content-buttons-button' href=""><div><h1>Mujer</h1></div></a>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Catalogue