import React, { useState } from 'react';
import '../frequent-questions/frequent-questions.css'

const Accordion = ({ id, title, content, image }) => {
  console.log("id "+id);
  const [isActive, setIsActive] = useState(false);
  return (

    <div className="accordion-item">
      <ul>
        <button className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '' : ''}</div>
        </button>
        {isActive && <div className="accordion-content">{content} 
          {image === undefined ? <div></div> : 
          <img src={image} data-aos="fade-up-right" alt="imageAccordion" className='imageA'></img> 
          }
          {id === 2 ? <a href="/puntos-ventas" target="_blank" rel="noopener noreferrer">Visita nuestra pagina de puntos de venta aquí</a> : <div></div>}
    
        </div>}
      </ul>
    </div>
  );
};

export default Accordion;
