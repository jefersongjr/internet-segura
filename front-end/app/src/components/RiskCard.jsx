import React from 'react';  

function RiskCard(title, content) {

return (
    <div className="App">
      <h3>{ title }</h3>
      <p>{ content }</p>
    </div>
  );
}

export default RiskCard;