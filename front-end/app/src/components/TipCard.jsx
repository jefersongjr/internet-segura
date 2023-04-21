import React from 'react';
import '../styles/TipCard.css';

function TipCard(img,  title, content) {
return (
    <div className="TipCard">
      <img 
        src={` ${ img }` } 
        alt={ `icon from icon8 ${ img }` }
        className='imgCard'
        />
      <h3 className='tipTitle'>{ title }</h3>
      <div className='text'>
      <p className='tipContent'>{ content }</p>
      </div>
    </div>
  );
}

export default TipCard;