import React, { useEffect, useState } from 'react';

import { capitalize } from 'shared/helpers';

import './TypeCard.css';

function TypeCard({ type }) {
  const [icon, setIcon] = useState();

  useEffect(() => {
    import(`images/type_icons/${type}.svg`).then((image) => setIcon(image.default));
  }, [type]);

  return (
    <span className="type-card-container">
      <img className="type-icon" src={icon} alt="Pokemon type icon" />
      {capitalize(type)}
    </span>
  );
}

export default TypeCard;
