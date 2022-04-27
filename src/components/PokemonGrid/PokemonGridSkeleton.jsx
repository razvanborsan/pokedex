import React from 'react';
import { Text, Box } from '@chakra-ui/react';

import PreviewCardSkeleton from 'components/cards/PreviewCard/PreviewCardSkeleton';
import { nanoid } from 'nanoid';

const skeleton = (() => [...Array(20)].map(() => nanoid()))();

function PokemonGridSkeleton() {
  return (
    <Box marginTop={10}>
      <Text marginLeft={55} fontSize="xl">Total pokemons: -</Text>

      <Box className="cards-container">
        {skeleton.map((val) => <PreviewCardSkeleton key={val} />)}
      </Box>
    </Box>
  );
}

export default PokemonGridSkeleton;
