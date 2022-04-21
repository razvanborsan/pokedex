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
    <Box key="gender" as="span">
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
    <Flex key="held_item" justify="center" align="center" direction="row">
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
    <Box key="known_move" as="span">
      Knows
      {' '}
      {normalizeString(move?.name)}
    </Box>
  ),
  known_move_type: (move) => (
    <Box key="known_move_type" as="span">
      Knows move of type
      {' '}
      {normalizeString(move?.name)}
    </Box>
  ),
  location: (location) => (
    <Box key="location">
      be at
      {' '}
      {normalizeString(location.name)}
    </Box>
  ),
  min_affection: (affectionLevel) => (
    <Box key="min_affection" as="span">
      at least
      {' '}
      {affectionLevel}
      {' '}
      affection
    </Box>
  ),
  min_happiness: (happinessLevel) => (
    <Box key="min_happiness" as="span">
      at least
      {' '}
      {happinessLevel}
      {' '}
      happiness
    </Box>
  ),
  min_beauty: (beautyLevel) => (
    <Box key="min_beauty" as="span">
      at least
      {' '}
      {beautyLevel}
      {' '}
      beauty
    </Box>
  ),
  min_level: (minLevel) => (
    <Flex key="min_level" justify="center" align="center" gap={2} as="span">
      {minLevel}
      <FontAwesomeIcon icon={faAnglesUp} />
    </Flex>
  ),
  needs_overworld_rain: () => (
    <Box key="needs_overworld_rain" as="span">raining</Box>
  ),
  party_species: (species) => (
    <Box key="party_species" as="span">
      have a
      {' '}
      {capitalize(species?.name)}
      {' '}
      in the party
    </Box>
  ),
  party_type: (type) => (
    <Box key="party_type" as="span">
      have a
      {' '}
      {capitalize(type?.name)}
      {' '}
      type pokemon in the party
    </Box>
  ),
  relative_physical_stats: (stat) => (
    <Box key="relative_physical_stats" as="span">
      {`Attack ${getSign(stat)} Defense`}
    </Box>
  ),
  time_of_day: (time) => (
    <Box key="time_of_day" as="span">
      at
      {' '}
      {time}
    </Box>
  ),
  trade_species: (species) => (
    <Box key="trade_species" as="span">
      traded Pokemon is
      {' '}
      {capitalize(species?.name)}
    </Box>
  ),
  turn_upside_down: () => (
    <Box key="turn_upside_down" as="span">
      hold device upside down
    </Box>
  ),
  item: (item) => (
    <Tooltip key="item" label={normalizeString(item?.name)}>
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
