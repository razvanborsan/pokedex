import React from 'react';

import './BaseCard.css';

function BaseCard({ customClasses, children }) {
  return (
    <div className="card-container">
      <div className={customClasses}>
        {children}
      </div>
    </div>
  );
}

export default BaseCard;
