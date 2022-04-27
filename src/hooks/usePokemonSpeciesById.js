import { useRecoilValue } from 'recoil';
import { pokemonSpeciesByIdQuery } from 'queries';

function usePokemonSpeciesById(id) {
  const species = useRecoilValue(pokemonSpeciesByIdQuery(+id));

  return species;
}

export default usePokemonSpeciesById;
