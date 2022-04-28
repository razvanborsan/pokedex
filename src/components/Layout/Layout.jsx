import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Image } from '@chakra-ui/react';

import githubLogo from 'images/githubLogo.svg';
import pokedexTitle from 'images/pokedexTitle.svg';

import './Layout.css';

function Layout({ children }) {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      className="app-container"
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        className="main-content"
      >
        <Link
          to="/pokemon"
          className="title-container"
        >
          <Flex
            justify="center"
            align="center"
            direction="row"
            marginBottom="20px"
            width="1080px"
          >
            <Image
              src={pokedexTitle}
              alt="Pokedex title"
              height="125px"
            />
          </Flex>
        </Link>

        <Flex justify="center" align="flex-start" direction="column">
          {children}
        </Flex>
      </Flex>

      <Flex
        justify="center"
        align="center"
        direction="row"
        width="100%"
        margin="20px"
        height="100px"
      >
        <a href="https://github.com/razvanborsan" target="_blank" rel="noreferrer">
          <Image
            src={githubLogo}
            alt="Github icon"
            boxSize="65px"
          />
        </a>
      </Flex>
    </Flex>
  );
}

export default Layout;
