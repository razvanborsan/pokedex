/* eslint-disable no-restricted-syntax */
import { Flex } from '@chakra-ui/react';
import React from 'react';

import BaseCard from 'components/cards/BaseCard/BaseCard';
import Evolution from 'components/cards/EvolutionCard/Evolution/Evolution';

import './EvolutionCard.css';

function EvolutionCard({ types, evolutions }) {
  const firstEvolutions = evolutions?.evolves_to;
  const secondEvolutions = evolutions?.evolves_to?.map(
    (evolution) => evolution?.evolves_to,
  ).flat();

  return (
    <BaseCard types={types} customClasses="evolution-card-container">
      <Flex justify="center" align="center" direction="row">
        <Evolution stage={0} evolution={evolutions} />
        <Flex justify="center" align="flex-end" direction="column" gap={10}>
          {firstEvolutions?.map((evolution) => (<Evolution stage={1} evolution={evolution} />))}
        </Flex>

        <Flex justify="center" align="flex-end" direction="column" gap={10}>
          {secondEvolutions?.map((evolution) => (<Evolution stage={2} evolution={evolution} />))}
        </Flex>

      </Flex>
    </BaseCard>
  );
}

export default EvolutionCard;
