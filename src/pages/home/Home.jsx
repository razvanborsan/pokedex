import React, { Suspense, useState } from 'react';
import { useRecoilValue } from 'recoil';

import {
  Box, Flex, Select,
} from '@chakra-ui/react';

import Search from 'components/Search/Search';

import capitalize, { capitalizeAllLetters } from 'shared/helpers/capitalize';

import './Home.css';
import { generationsQuery } from 'queries';
import PokemonGrid from 'components/PokemonGrid/PokemonGrid';
import PokemonGridSkeleton from '../../components/PokemonGrid/PokemonGridSkeleton';

const formatGenerationName = (name) => `${capitalize(name.split('-')[0])} ${capitalizeAllLetters(name.split('-')[1])}`;

function Home() {
  const [selectedGen, setSelectedGen] = useState('');

  const generations = useRecoilValue(generationsQuery);

  const handleGenerationChange = (e) => {
    setSelectedGen(e.target.value);
  };

  return (
    <>
      <Flex gap={30} justify align="center" className="header-container">
        <Box width={400}>
          <Search />
        </Box>

        <Select
          width={250}
          variant="outline"
          placeholder="Select a Generation"
          size="lg"
          onChange={handleGenerationChange}
        >
          {generations && generations?.map((gen) => (
            <option key={gen?.name} value={gen?.url}>
              {formatGenerationName(gen?.name)}
              {' '}
            </option>
          ))}
        </Select>
      </Flex>
      <Suspense fallback={<PokemonGridSkeleton />}>
        <PokemonGrid
          selectedGen={selectedGen}
        />
      </Suspense>

    </>
  );
}

export default Home;
