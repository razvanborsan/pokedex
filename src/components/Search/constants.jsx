/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Image } from 'react-img-placeholder';
import { chakraComponents } from 'chakra-react-select';

import getPokemonSpriteUrl from 'shared/helpers/getPokemonSpriteUrl';

import pokemonEgg from 'images/pokemon_egg.svg';

const customComponents = {
  Option: ({ children, ...props }) => (
    <chakraComponents.Option {...props}>
      <Image
        src={getPokemonSpriteUrl(props?.data?.val)}
        alt={`${props.data.label} sprite`}
        width={50}
        height={50}
        placeholderSrc={pokemonEgg}
      />
      {children}
    </chakraComponents.Option>
  ),
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
};

export default customComponents;
