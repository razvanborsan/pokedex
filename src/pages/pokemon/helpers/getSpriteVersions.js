import hasSprites from './hasSprites';

const pokemonGamesNames = {
  'firered-leafgreen': 'FireRed/LeafGreen',
  'heartgold-soulsilver': 'HeartGold/SoulSilver',
  'omegaruby-alphasapphire': 'Omega Ruby/Alpha Sapphire',
  'ultra-sun-ultra-moon': 'Ultra Sun/Ultra Moon',
};

export default function getSpriteVersions(versions, defaultSprites, pokemonId) {
  return (typeof pokemonId === 'number' && !Number.isNaN(pokemonId))
    ? [['official', defaultSprites], ...Object.entries(versions).reduce((accumulator, currValue) => {
      const key = currValue[0];
      const value = currValue[1];

      if (key !== 'generation-viii') {
        Object.entries(value).forEach((game) => {
          if (game[0] !== 'icons' && hasSprites(game[1])) {
            if (game[0] === 'black-white') {
              const { animated, ...rest } = game[1];
              if (+pokemonId <= 649) accumulator.push([game[0], rest]);
            } else {
              accumulator.push([pokemonGamesNames[game[0]] || game[0], game[1]]);
            }
          }
        });
      }

      return accumulator;
    }, [])]
    : [];
}
