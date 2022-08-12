import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from '../../components/news-item/NewsItem'
import './instagram_news.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'

const InstagramNews = () => {

    const [count, setCount] = useState(0);
    const [transitionValue, setTransitionValue] = useState(1);

  useEffect(() => {
    setTimeout(() => {
        if (count <= 4) {
            setCount(count + 1)
            setTransitionValue(1)
        } else if (count > 4) {
            setCount(0)
            setTransitionValue(0)
        }
    }, 2500);
  }, [count]);

  return (
    <div className='dacris__instagramNews'>
        <h1 className='dacris__instagramNews-title'>Noticias de Instagram</h1>
        <div className='dacris__instagramNews-container'>
            <div className="dacris__instagramNews-container-news" style={{transform: `translateX(${-400*count}px)`, transition: `${transitionValue}s ease-in-out`}}>
                <NewsItem image={image1} />
                <NewsItem image={image2} />
                <NewsItem image={image3} />
                <NewsItem image={image4} />
                <NewsItem image={image5} />
                <NewsItem image={image1} />
                <NewsItem image={image2} />
                <NewsItem image={image3} />
                <NewsItem image={image4} />
                <NewsItem image={image5} />
            </div>
        </div>
    </div>
  )
}

export default InstagramNews