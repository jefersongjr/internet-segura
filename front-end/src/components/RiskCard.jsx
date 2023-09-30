import React from 'react';
import '../styles/RiskCard.css';

function RiskCard(title, content) {
  return (
    <div className="RiskCard">
      <h3 className="riskTitle">{ title }</h3>
      <p className="riskContent">{ content }</p>
    </div>
  );
}

export default RiskCard;
