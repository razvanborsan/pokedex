import React from 'react';

import './Title.css';

function Title({ children }) {
  return <h1 className="pokedexTitle">{children}</h1>;
}

export default Title;
