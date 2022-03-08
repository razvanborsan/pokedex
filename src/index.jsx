import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Pokemon from './pages/pokemon/Pokemon';
import Home from './pages/home/Home';

import './index.css';
import NotFound from './pages/404/NotFound';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pokemon" element={<Home />} />
          <Route path="pokemon/:pokemonId" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
