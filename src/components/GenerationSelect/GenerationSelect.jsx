import React from 'react';
import { Select } from '@chakra-ui/react';

import capitalize, { capitalizeAllLetters } from 'shared/helpers/capitalize';
import useGenerations from '../../hooks/useGenerations';

const formatGenerationName = (name) => `${capitalize(name.split('-')[0])} ${capitalizeAllLetters(name.split('-')[1])}`;

function GenerationSelect({ onChange }) {
  const generations = useGenerations();

  return (
    <Select
      width={250}
      variant="filled"
      placeholder="Select a Generation"
      size="lg"
      onChange={onChange}
    >
      {generations && generations?.map((gen) => (
        <option key={gen?.name} value={gen?.url}>
          {formatGenerationName(gen?.name)}
          {' '}
        </option>
      ))}
    </Select>
  );
}

export default GenerationSelect;
