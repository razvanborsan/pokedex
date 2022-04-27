import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

import capitalize from 'shared/helpers/capitalize';

import pokemonEgg from 'images/pokemon_egg.svg';
import usePokemonById from '../../../hooks/usePokemonById';

function PokemonHeaderCard({ pokemon }) {
  const leftPokemon = usePokemonById(pokemon.id - 1);
  const rightPokemon = usePokemonById(pokemon.id + 1);

  return (
    <Box width="100%">
      <Flex
        width="100%"
        justify="space-between"
        align="center"
        direction="row"
        margin="10px 0"
      >
        <Link
          to={`/pokemon/${pokemon.id - 1}`}
          id={pokemon.id - 1}
        >
          <Flex
            justifyContent="center"
            align="flex-end"
            direction="row"
            minWidth="210px"
          >
            {pokemon.id > 1 && (
            <>
              <FontAwesomeIcon icon={faLeftLong} />
              <Image
                src={leftPokemon?.sprites?.versions?.['generation-viii']?.icons?.front_default}
                width="68px"
                height="56px"
                alt={`${pokemon?.name} icon`}
                fallbackSrc={pokemonEgg}
              />
              #
              {leftPokemon.id.toString().padStart(3, '0')}
              {': '}
              {capitalize(leftPokemon.name)}
            </>
            )}

          </Flex>
        </Link>

        <Flex
          justify="center"
          align="flex-end"
          direction="column"
        >
          <Image
            src={pokemon?.sprites?.versions?.['generation-viii']?.icons?.front_default}
            width="68px"
            height="56px"
            alt={`${pokemon?.name} icon`}
            fallbackSrc={pokemonEgg}
          />
        </Flex>

        <Link to={`/pokemon/${pokemon.id + 1}`} id={pokemon.id + 1}>

          <Flex
            justifyContent="center"
            align="flex-end"
            direction="row"
            minWidth="210px"
          >
            {pokemon.id < 898 && (
            <>
              #
              {rightPokemon.id.toString().padStart(3, '0')}
              {': '}
              {capitalize(rightPokemon.name)}
              <Image
                src={rightPokemon?.sprites?.versions?.['generation-viii']?.icons?.front_default}
                alt={`${pokemon?.name} icon`}
                width="68px"
                height="56px"
                fallbackSrc={pokemonEgg}
              />
              <FontAwesomeIcon icon={faRightLong} />
            </>
            )}
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
}

export default PokemonHeaderCard;
