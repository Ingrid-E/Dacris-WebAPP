import React from 'react'
import './slideAboutUs.css'

const SlideAboutUs = ({ Title, Text, Path1, Path2, Path3}) => {

  return (
    <div className='dacris__slideAboutUs'>
      <div className='dacris__slideAboutUs-images'>
        <div className='dacris__slideAboutUs-images-container'>
          <img className='dacris__slideAboutUs-images-container-principal-image' src={Path1} alt="us.jpg"></img>
          <div className='dacris__slideAboutUs-images-container-small-image-container'><img className='dacris__slideAboutUs-images-container-small-image-container-image' src={Path2} alt="us.jpg"></img></div>
          <div className='dacris__slideAboutUs-images-container-small-image-container'><img className='dacris__slideAboutUs-images-container-small-image-container-image' src={Path3} alt="us.jpg"></img></div>
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