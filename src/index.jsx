import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from 'components/Layout/Layout';
import PageLoader from 'components/PageLoader/PageLoader';

import './index.css';

const Home = lazy(() => import('pages/home/Home'));
const Pokemon = lazy(() => import('pages/pokemon/Pokemon'));
const NotFound = lazy(() => import('pages/404/NotFound'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="pokemon" element={<Home />} />
              <Route path="pokemon/:pokemonId" element={<Pokemon />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
