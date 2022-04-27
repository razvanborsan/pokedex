function usePokemonSprites(sprites) {
  return Object.entries(sprites).reduce((accumulator, currValue) => {
    const key = currValue[0];
    const val = currValue[1];

    if (val) {
      accumulator.push({
        title: key,
        url: val,
      });
    }

    return accumulator;
  }, []);
}

export default usePokemonSprites;
