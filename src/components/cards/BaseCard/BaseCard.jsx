import React from 'react';

import './BaseCard.css';

function BaseCard({ customClasses, children }) {
  return (
    <div className={`card-container ${customClasses}`}>
      {children}
    </div>
  );
}

export default BaseCard;
