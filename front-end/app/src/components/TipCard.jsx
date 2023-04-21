import React from 'react';
import '../styles/TipCard.css';

function TipCard(img, description,  title, content) {
return (
    <div className="TipCard">
      <img src={`${ img }`}/>
      <h3 className='tipTitle'>{ title }</h3>
      <p className='tipContent'>{ content }</p>
    </div>
  );
}

export default TipCard;