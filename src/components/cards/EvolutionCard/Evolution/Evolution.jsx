/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Image } from '@chakra-ui/react';

import { faPlus, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TypeCard from 'components/cards/TypeCard/TypeCard';
import usePokemonById from 'hooks/usePokemonById';
import normalizeString from 'shared/helpers/normalizeString';
import getPokemonIdFromUrl from 'shared/helpers/getPokemonIdFromUrl';
import capitalize from 'shared/helpers/capitalize';
import pokemonEgg from 'images/pokemon_egg.svg';

import evolutionDetails from '../evolutionDetails';

import './Evolution.css';

const stageString = {
  0: 'Unevolved',
  1: 'First Evolution',
  2: 'Second Evolution',
};

function getEvolutionTriggers(details) {
  const triggers = [];

  details?.forEach((detail) => {
    const trigger = [];

    for (const [key, value] of Object.entries(detail)) {
      if (!!value && key !== 'trigger') {
        trigger.push(<FontAwesomeIcon icon={faPlus} />);
        trigger.push(evolutionDetails[key](value));
      }
    }

    triggers.push(
      <Flex justify="center" align="center" direction="column">
        <Flex gap={2} justify="center" align="center" direction="row">
          {normalizeString(detail.trigger.name)}
          {trigger}
        </Flex>
        <FontAwesomeIcon icon={faRightLong} />
      </Flex>,
    );
  });

  return details?.length ? (
    <Box className="evolution-triggers-container">
      {triggers}
    </Box>
  ) : <div />;
}

function Evolution({ stage, evolution }) {
  const pokemonId = getPokemonIdFromUrl(evolution?.species?.url);
  const { data: pokemon } = usePokemonById(pokemonId);

  return (
    <Flex
      as="span"
      justify="center"
      align="center"
      direction="row"
    >
      {getEvolutionTriggers(evolution?.evolution_details)}
      <Link to={`/pokemon/${pokemonId}`} id={pokemonId}>
        <Flex
          justify="center"
          align="center"
          direction="column"
          className={`evolution-cardy-container ${pokemon?.types[0]?.type?.name}-hover`}
        >
          <Box
            className={`evolution-image-container ${pokemon?.types?.[0]?.type?.name}`}
          >
            <Image
              src={pokemon?.sprites?.other?.['official-artwork']?.front_default}
              alt={`${evolution?.species?.name} sprite`}
              boxSize="100px"
              fallbackSrc={pokemonEgg}
            />
          </Box>
          {stageString[stage]}
          <Flex
            className="evolution-badge-types"
            justify="center"
            align="center"
            direction="column"
          >
            {capitalize(pokemon?.name)}
            <Flex
              justify="center"
              align="center"
              direction="row"
            >
              {pokemon?.types?.map((poke) => <TypeCard key={poke?.slot} type={poke?.type?.name} />)}
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}

export default Evolution;
