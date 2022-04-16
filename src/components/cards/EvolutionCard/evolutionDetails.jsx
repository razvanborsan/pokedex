import {
  Box, Flex, Image, Tooltip,
} from '@chakra-ui/react';
import { faAnglesUp, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import pokemonEgg from 'images/pokemon_egg.svg';
import normalizeString from '../../../shared/helpers/normalizeString';
import capitalize from '../../../shared/helpers/capitalize';

const getSign = (stat) => {
  if (stat === 0) return '=';
  if (stat === 1) return '>';
  return '<';
};

const evolutionDetails = {
  gender: (gender) => (
    <Box as="span">
      {gender === 1
        ? (
          <Flex gap={1} justify="center" align="center" direction="row">
            Female
            <FontAwesomeIcon icon={faVenus} />
          </Flex>
        )
        : (
          <Flex gap={1} justify="center" align="center" direction="row">
            Male
            <FontAwesomeIcon icon={faMars} />
          </Flex>
        )}
    </Box>
  ),
  held_item: (heldItem) => (
    <Flex justify="center" align="center" direction="row">
      Hold
      <Tooltip label={normalizeString(heldItem?.name)}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${heldItem.name}.png`}
          alt={`${heldItem.name} sprite`}
          boxSize="30px"
          fallbackSrc={pokemonEgg}
        />
      </Tooltip>
    </Flex>
  ),
  known_move: (move) => (
    <Box as="span">
      Knows
      {' '}
      {normalizeString(move?.name)}
    </Box>
  ),
  known_move_type: (move) => (
    <Box as="span">
      Knows move of type
      {' '}
      {normalizeString(move?.name)}
    </Box>
  ),
  location: (location) => (
    <Box>
      be at
      {' '}
      {normalizeString(location.name)}
    </Box>
  ),
  min_affection: (affectionLevel) => (
    <Box as="span">
      at least
      {' '}
      {affectionLevel}
      {' '}
      affection
    </Box>
  ),
  min_happiness: (happinessLevel) => (
    <Box as="span">
      at least
      {' '}
      {happinessLevel}
      {' '}
      happiness
    </Box>
  ),
  min_beauty: (beautyLevel) => (
    <Box as="span">
      at least
      {' '}
      {beautyLevel}
      {' '}
      beauty
    </Box>
  ),
  min_level: (minLevel) => (
    <Flex justify="center" align="center" gap={2} as="span">
      {minLevel}
      <FontAwesomeIcon icon={faAnglesUp} />
    </Flex>
  ),
  needs_overworld_rain: () => (
    <Box as="span">raining</Box>
  ),
  party_species: (species) => (
    <Box as="span">
      have a
      {' '}
      {capitalize(species?.name)}
      {' '}
      in the party
    </Box>
  ),
  party_type: (type) => (
    <Box as="span">
      have a
      {' '}
      {capitalize(type?.name)}
      {' '}
      type pokemon in the party
    </Box>
  ),
  relative_physical_stats: (stat) => (
    <Box as="span">
      {`Attack ${getSign(stat)} Defense`}
    </Box>
  ),
  time_of_day: (time) => (
    <Box as="span">
      at
      {' '}
      {time}
    </Box>
  ),
  trade_species: (species) => (
    <Box as="span">
      traded Pokemon is
      {' '}
      {capitalize(species?.name)}
    </Box>
  ),
  turn_upside_down: () => (
    <Box as="span">
      hold device upside down
    </Box>
  ),
  item: (item) => (
    <Tooltip label={normalizeString(item?.name)}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`}
        alt={`${item.name} sprite`}
        boxSize="30px"
        fallbackSrc={pokemonEgg}
      />
    </Tooltip>
  ),
};

export default evolutionDetails;
