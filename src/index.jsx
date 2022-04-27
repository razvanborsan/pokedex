import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import {
  ChakraProvider, Flex, Spinner,
} from '@chakra-ui/react';

import Layout from 'components/Layout/Layout';
import PokemonSkeleton from 'pages/pokemon/PokemonSkeleton';

import './index.css';

const Home = lazy(() => import('pages/home/Home'));
const Pokemon = lazy(() => import('pages/pokemon/Pokemon'));
const NotFound = lazy(() => import('pages/404/NotFound'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Suspense fallback={(
          <Flex backgroundColor="#E6E6E6" justify="center" align="center" width="100vw" height="100vh">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
          )}
        >
          <Layout>
            <RecoilRoot>
              <Routes>
                <Route index element={<Home />} />
                <Route path="pokemon" element={<Home />} />
                <Route
                  path="pokemon/:pokemonId"
                  element={(
                    <Suspense
                      fallback={<PokemonSkeleton />}
                    >
                      <Pokemon />
                    </Suspense>
      )}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </RecoilRoot>
          </Layout>
        </Suspense>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
