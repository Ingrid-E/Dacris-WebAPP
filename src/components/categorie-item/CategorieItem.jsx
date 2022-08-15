import React from 'react'
import './categorie_item.css'

const CategorieItem = ({ text }) => {
  return (
    <div className='dacris__categorie-item'>
      <div className='dacris__categorie-item-image'>
        <div className='dacris__categorie-item-image-info'>
          <h1>{text}</h1>
        </div>
      </div>
      <div className='dacris__categorie-item-border'>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default CategorieItem