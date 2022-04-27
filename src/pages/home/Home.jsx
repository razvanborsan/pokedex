import React, { Suspense, useState } from 'react';

import {
  Box, Flex,
} from '@chakra-ui/react';

import Search from 'components/Search/Search';
import PokemonGrid from 'components/PokemonGrid/PokemonGrid';
import PokemonGridSkeleton from 'components/PokemonGrid/PokemonGridSkeleton';
import SearchSkeleton from 'components/Search/SearchSkeleton';
import GenerationSelect from 'components/GenerationSelect/GenerationSelect';
import GenerationSelectSkeleton from 'components/GenerationSelect/GenerationSelectSkeleton';

import './Home.css';

function Home() {
  const [selectedGen, setSelectedGen] = useState('');

  const handleGenerationChange = (e) => {
    setSelectedGen(e.target.value);
  };

  return (
    <>
      <Flex gap={30} justify align="center" className="header-container">
        <Box width={400}>
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </Box>

        <Suspense fallback={<GenerationSelectSkeleton />}>
          <GenerationSelect onChange={handleGenerationChange} />
        </Suspense>
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
