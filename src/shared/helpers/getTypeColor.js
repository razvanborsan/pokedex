const pokeColors = {
  normal: 'rgba(167, 168, 119, 0.5)',
  fire: 'rgba(240, 128, 48, 0.5)',
  water: 'rgba(104, 144, 240, 0.5)',
  electric: 'rgba(249, 208, 48, 0.5)',
  grass: 'rgba(120, 200, 79, 0.5)',
  ice: 'rgba(150, 217, 214, 0.5)',
  fighting: 'rgba(194, 46, 40, 0.5)',
  poison: 'rgba(163, 62, 161, 0.5)',
  ground: 'rgba(226, 191, 101, 0.5)',
  flying: 'rgba(169, 143, 243, 0.5)',
  psychic: 'rgba(249, 85, 135, 0.5)',
  bug: 'rgba(166, 185, 26, 0.5)',
  rock: 'rgba(182, 161, 54, 0.5)',
  ghost: 'rgba(112, 89, 152, 0.5)',
  dragon: 'rgba(111, 53, 252, 0.5)',
  dark: 'rgba(112, 87, 70, 0.5)',
  steel: 'rgba(183, 183, 206, 0.5)',
  fairy: 'rgba(214, 133, 173, 0.5)',
};

export default function getTypeColor(types) {
  return types?.length === 1
    ? { backgroundColor: pokeColors[types?.[0]?.type?.name] }
    : {
      backgroundImage: `linear-gradient(
            180deg, 
            ${pokeColors[types?.[0]?.type?.name]} 0%, 
            ${pokeColors[types?.[1]?.type?.name]} 100%)`,
    };
}
