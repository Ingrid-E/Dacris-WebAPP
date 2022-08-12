import React from 'react'
import { Footer, HeaderTitle, Navbar } from '../../components'
import './catalogue_products.css'

const CatalogueProducts = () => {
  return (
    <div className='dacris__catalogue-products'>
        <Navbar />
        <HeaderTitle title='Mujer'/>
        <div className='dacris__catalogue-products-content'>
            <div></div>
        </div>
        <Footer />
    </div>
  )
}

export default CatalogueProducts