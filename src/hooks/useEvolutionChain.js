import { useRecoilValue } from 'recoil';
import { evolutionChainQuery } from 'queries';

function useEvolutionChain(url) {
  const evolutionChain = useRecoilValue(evolutionChainQuery(url));

  return evolutionChain;
}

export default useEvolutionChain;
