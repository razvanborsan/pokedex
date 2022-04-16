import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Flex, Image } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

import TypeCard from 'components/cards/TypeCard/TypeCard';
import capitalize from 'shared/helpers/capitalize';
import getTypeColor from 'shared/helpers/getTypeColor';
import usePokemonFormById from 'hooks/usePokemonFormById';
import pokemonEgg from 'images/pokemon_egg.svg';

import './PreviewCard.css';

const MotionBox = motion(Box);

const spriteVariants = {
  init: {
    y: 0,
  },
  firstRender: {
    scale: 1,
  },
  anim: {
    y: [0, -8, 0, 8, 0],
    transition: {
      ease: 'linear',
      type: 'spring',
      stiffness: 200,
      duration: 2,
      repeat: Infinity,
    },
  },
};

function PreviewCard({ pokemon }) {
  const [animateSprite, setAnimateSprite] = useState(false);
  const spriteAnimation = useAnimation();
  const { data: pokemonForms } = usePokemonFormById(pokemon?.id);

  useEffect(() => {
    spriteAnimation.set(spriteVariants.firstRender);
  }, []);

  useEffect(() => {
    if (animateSprite) {
      spriteAnimation.start(spriteVariants.anim);
    } else {
      spriteAnimation.stop();
      spriteAnimation.set(spriteVariants.init);
    }
  }, [animateSprite]);

  const types = pokemonForms?.types;

  return (
    <MotionBox
      className="preview-card"
      style={{
        ...getTypeColor(types),
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setAnimateSprite(true)}
      onHoverEnd={() => setAnimateSprite(false)}
      whileTap={{ scale: 0.9 }}
    >
      <Link to={`/pokemon/${pokemon.id}`} id={pokemon.id}>
        <div className="card-content">
          <div className="card-header">
            <h3>{capitalize(pokemon.name)}</h3>
            <h4>
              #
              {pokemon.id.toString().padStart(3, '0')}
            </h4>
            <MotionBox
              className="pokemon-photo"
              animate={spriteAnimation}
              initial={{ scale: 0 }}
              onAnimationComplete={() => setAnimateSprite(false)}
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
                alt={`${pokemon.name} sprite`}
                fallbackSrc={pokemonEgg}
              />
            </MotionBox>
            <Flex justify="center" align="center" direction="row">
              {pokemonForms?.types?.map(
                (poke) => <TypeCard key={poke?.slot} type={poke?.type?.name} />,
              )}
            </Flex>
          </div>
        </div>
      </Link>
    </MotionBox>
  );
}

export default PreviewCard;
