import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Image } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

import capitalize from 'shared/helpers/capitalize';
import getPokemonSpriteUrl from 'shared/helpers/getPokemonSpriteUrl';

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

  return (
    <MotionBox
      className="preview-card"
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
                src={getPokemonSpriteUrl(pokemon?.id)}
                alt={`${pokemon.name} sprite`}
                boxSize="150px"
                fallbackSrc={pokemonEgg}
              />
            </MotionBox>
          </div>
        </div>
      </Link>
    </MotionBox>
  );
}

export default PreviewCard;
