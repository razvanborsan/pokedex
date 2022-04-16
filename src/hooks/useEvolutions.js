import useFetch from './useFetch';

function useEvolutions(url) {
  const { data, error, loading } = useFetch(url);

  return { data: data?.chain, error, loading };
}

export default useEvolutions;
