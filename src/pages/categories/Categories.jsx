import React from 'react'
import { CategorieItem, Footer, HeaderTitle, Navbar } from '../../components'
import "./categories.css"

const Categories = () => {
  return (
    <div className='dacris__categories'>
        <Navbar />
        <div className='dacris__categories-content'>
            <HeaderTitle title='Categorias' />
            <div className='dacris__categories-content-items'>
              <CategorieItem text='Manos Libres' path='https://dacrisphotobucket.s3.amazonaws.com/1638977952631-01-1660091328207.jpeg' />
              <CategorieItem text='Morrales' path='https://dacrisphotobucket.s3.amazonaws.com/Bag-1660093746096.jpeg' />
              <CategorieItem text='Carteras' path='https://dacrisphotobucket.s3.amazonaws.com/MiniBag-1660233757116.jpeg' />
              <CategorieItem text='Sobres de fiesta' path='https://dacrisphotobucket.s3.amazonaws.com/1638977952631-01-1660091328207.jpeg' />
              <CategorieItem text='Cosmetiqueras' path='https://dacrisphotobucket.s3.amazonaws.com/Bag-1660093746096.jpeg' />
              <CategorieItem text='Correas' path='https://dacrisphotobucket.s3.amazonaws.com/MiniBag-1660233757116.jpeg' />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Categories