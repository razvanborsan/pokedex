import { useState, useEffect } from 'react';
import axios from 'axios';

function usePokemonById(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const iife = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (iife());
  }, [url]);

  return { data, error, loading };
}

export default usePokemonById;
