/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Image } from '@chakra-ui/react';
import { chakraComponents } from 'chakra-react-select';

import getPokemonSpriteUrl from 'shared/helpers/getPokemonSpriteUrl';

import pokemonEgg from 'images/pokemon_egg.svg';

const customComponents = {
  Option: ({ children, ...props }) => (
    <chakraComponents.Option {...props}>
      <Image
        src={getPokemonSpriteUrl(props?.data?.val)}
        alt={`${props.data.label} sprite`}
        boxSize="50px"
        fallbackSrc={pokemonEgg}
      />
      {children}
    </chakraComponents.Option>
  ),
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
};

export default customComponents;
