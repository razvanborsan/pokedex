import React from 'react';
import { Link } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <div className="main-content">
        <Link to="/pokemon">
          <h1 className="pokedex-title">Pokedex</h1>
        </Link>

        <Flex justify="center" align="flex-start" direction="column">
          {children}
        </Flex>
      </div>
    </div>
  );
}

export default Layout;
