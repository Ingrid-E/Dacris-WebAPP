import React from 'react'
import './news_item.css'

const NewsItem = ({image}) => {
  return (
    <div className='dacris__newsItem' style={{background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

    </div>
  )
}

export default NewsItem