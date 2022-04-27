import { useRecoilValue } from 'recoil';
import { pokemonByIdQuery } from 'queries';

function usePokemonById(id) {
  const pokemon = useRecoilValue(pokemonByIdQuery(+id));

  return pokemon;
}

export default usePokemonById;
