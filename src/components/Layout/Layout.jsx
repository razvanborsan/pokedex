import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Text } from '@chakra-ui/react';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <div className="main-content">
        <Link to="/pokemon">
          {/* <h1 className="pokedex-title">Pokedex</h1> */}
          <Text
            className="pokedex-title"
            fontSize="3xl"
          >
            Pokedex
          </Text>
        </Link>

        <Flex justify="center" align="flex-start" direction="column">
          {children}
        </Flex>
      </div>
    </div>
  );
}

export default Layout;
