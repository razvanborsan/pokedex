import React from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { pokemonId } = useParams();
  if (Number.isNaN(+pokemonId) || +pokemonId < 1 || +pokemonId > 811) {
    return <div>Muje</div>;
  }

  return (
    <div>
      Hello World
    </div>
  );
}

export default Pokemon;
