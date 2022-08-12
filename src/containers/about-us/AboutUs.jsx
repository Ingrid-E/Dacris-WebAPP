import React, { useState } from 'react'
import './about_us.css'
import { SlideAboutUs } from '../../components'
import us1 from '../../assets/aboutUs-slide1-image1.jpg';
import us2 from '../../assets/aboutUs-slide1-image2.jpg';
import us3 from '../../assets/aboutUs-slide1-image2.jpg';
import mision1 from '../../assets/aboutUs-slide2-image1.jpeg';
import mision2 from '../../assets/aboutUs-slide2-image2.jpeg';
import mision3 from '../../assets/aboutUs-slide2-image3.jpeg';
import vision1 from '../../assets/aboutUs-slide3-image1.jpeg';
import vision2 from '../../assets/aboutUs-slide3-image2.jpeg';
import vision3 from '../../assets/aboutUs-slide3-image3.jpeg';

const AboutUS = () => {

  const [title, setTitleValue] = useState({
    Title: 'Nosotros',
    Text: 'Brindamos una experiencia de compra única, donde se obtendrá el producto tal como se imagina gracias a la personalización, promoviendo el consumo de manera consciente, siguiendo el camino del SlowFashion.',
    Path1: us1,
    Path2: us2,
    Path3: us3
  });

  return (
    <div className='dacris__aboutUs'>
        <SlideAboutUs Title={title.Title} Text={title.Text} Path1={title.Path1} Path2={title.Path2} Path3={title.Path3}/>
      <div className='dacris__aboutUs-container-buttons'>
        <div className='dacris__dotButton' onClick={() => setTitleValue({...title, Title: 'Nosotros', Text: 'Brindamos una experiencia de compra única, donde se obtendrá el producto tal como se imagina gracias a la personalización, promoviendo el consumo de manera consciente, siguiendo el camino del SlowFashion.', Path1: us1 , Path2: us2 , Path3: us3})}></div>
        <div className='dacris__dotButton' onClick={() => setTitleValue({...title, Title: 'Nuestra Mision', Text: 'Brindamos una experiencia de compra única, donde se obtendrá el producto tal como se imagina gracias a la personalización, promoviendo el consumo de manera consciente, siguiendo el camino del SlowFashion.', Path1: mision1 , Path2: mision2 , Path3: mision3})}></div>
        <div className='dacris__dotButton' onClick={() => setTitleValue({...title, Title: 'Nuestra Vision', Text: 'Representar a nuestra región como un empresa consciente, superando expectativas de calidad y precio, fabricando nuestros insumos ecoamigables y reduciendo al rededor del 50% los residuos generados por nuestros productos.', Path1:vision1 , Path2:vision2 , Path3:vision3})}></div>
      </div>
      
    </div>
  )
}



export default AboutUS