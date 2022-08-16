import React, { useState, useEffect } from 'react';
import '../frequent-questions/frequent-questions.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Accordion = ({ id, title, content, image }) => {

  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (

    <div className="accordion-item">
      <ul>
        <button className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '' : ''}</div>
        </button>
        {isActive && <div data-aos="fade-down" data-aos-easing="ease-out-cubic"
          data-aos-duration="1000" className="accordion-content">{content}
          {image === undefined ? <div></div> :
            <img src={image} data-aos="fade-down" alt="imageAccordion" className='imageA'></img>
          }
          {id === 2 ? <a href="/puntos-ventas" target="_blank" rel="noopener noreferrer">Visita nuestra pagina de puntos de venta aquí</a> : <div></div>}

        </div>}
      </ul>
    </div>
  );
};

export default Accordion;
