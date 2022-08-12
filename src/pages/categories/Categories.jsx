import React from 'react'
import { Footer, HeaderTitle, Navbar } from '../../components'
import "./categories.css"

const Categories = () => {
  return (
    <div className='dacris__categories'>
        <Navbar />
        <div className='dacris__categories-content'>
            <HeaderTitle title='Categorias' />
            <div className='dacris__categories-content-items'>
              <div className='dacris__categories-content-items-item'>
                <div className='dacris__categories-content-items-item-image'>
                  <div className='dacris__categories-content-items-item-image-info'>
                    <h1>Manos Libres</h1>
                  </div>
                </div>
                <div className='dacris__categories-content-items-item-border'>
                  <h1>Manos Libres</h1>
                </div>
              </div>

              <div className='dacris__categories-content-items-item'>
                <div className='dacris__categories-content-items-item-image'>
                  <div className='dacris__categories-content-items-item-image-info'>
                    <h1>Morrales</h1>
                  </div>
                </div>
                <div className='dacris__categories-content-items-item-border'>
                  <h1>Morrales</h1>
                </div>
              </div>

              <div className='dacris__categories-content-items-item'>
                <div className='dacris__categories-content-items-item-image'>
                  <div className='dacris__categories-content-items-item-image-info'>
                    <h1>Carteras</h1>
                  </div>
                </div>
                <div className='dacris__categories-content-items-item-border'>
                  <h1>Carteras</h1>
                </div>
              </div>

              <div className='dacris__categories-content-items-item'>
                <div className='dacris__categories-content-items-item-image'>
                  <div className='dacris__categories-content-items-item-image-info'>
                    <h1>Sobres de fiesta</h1>
                  </div>
                </div>
                <div className='dacris__categories-content-items-item-border'>
                  <h1>Sobres de fiesta</h1>
                </div>
              </div>

              <div className='dacris__categories-content-items-item'>
                <div className='dacris__categories-content-items-item-image'>
                  <div className='dacris__categories-content-items-item-image-info'>
                    <h1>Cosmetiqueras</h1>
                  </div>
                </div>
                <div className='dacris__categories-content-items-item-border'>
                  <h1>Cosmetiqueras</h1>
                </div>
              </div>

              <div className='dacris__categories-content-items-item'>
                <div className='dacris__categories-content-items-item-image'>
                  <div className='dacris__categories-content-items-item-image-info'>
                    <h1>Correas</h1>
                  </div>
                </div>
                <div className='dacris__categories-content-items-item-border'>
                  <h1>Correas</h1>
                </div>
              </div>

              <div className='dacris__categories-content-items-item'>
                <div className='dacris__categories-content-items-item-image'>
                  <div className='dacris__categories-content-items-item-image-info'>
                    <h1>Manos Libres</h1>
                  </div>
                </div>
                <div className='dacris__categories-content-items-item-border'>
                  <h1>Manos Libres</h1>
                </div>
              </div>

              <div className='dacris__categories-content-items-item'>
                <div className='dacris__categories-content-items-item-image'>
                  <div className='dacris__categories-content-items-item-image-info'>
                    <h1>Manos Libres</h1>
                  </div>
                </div>
                <div className='dacris__categories-content-items-item-border'>
                  <h1>Manos Libres</h1>
                </div>
              </div>
              
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Categories