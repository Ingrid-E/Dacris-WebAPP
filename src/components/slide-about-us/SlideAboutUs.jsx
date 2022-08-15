import React from 'react'
import './slideAboutUs.css'

const SlideAboutUs = ({ Title, Text, Path1, Path2, Path3}) => {

  return (
    <div className='dacris__slideAboutUs'>
      <div className='dacris__slideAboutUs-images'>
        <div className='dacris__slideAboutUs-images-container'>
          <div className='dacris__slideAboutUs-images-container-big-image-container' style={{backgroundImage: `url(${Path1})`, backgroundSize: 'cover', backgroundPosition:'center'}}></div>
          <div className='dacris__slideAboutUs-images-container-small-image-container' style={{backgroundImage: `url(${Path2})`, backgroundSize: 'cover', backgroundPosition:'center'}}></div>
          <div className='dacris__slideAboutUs-images-container-small-image-container' style={{backgroundImage: `url(${Path3})`, backgroundSize: 'cover', backgroundPosition:'center'}}></div>
        </div>
      </div>
      <div className='dacris__slideAboutUs-data'>
        <h1 className='dacris__slideAboutUs-data-title'>{Title}</h1>
        <p className='dacris__slideAboutUs-data-text'>{Text}</p>
      </div>
    </div>
  )
}

export default SlideAboutUs