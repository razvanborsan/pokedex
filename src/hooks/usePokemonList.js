import { useRecoilValue } from 'recoil';
import { pokemonListQuery } from 'queries';

function usePokemonList(value) {
  const pokemon = useRecoilValue(pokemonListQuery(value));

  return pokemon;
}

export default usePokemonList;
