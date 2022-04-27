import React from 'react';
import {
  Flex, Box, Skeleton,
} from '@chakra-ui/react';

function PokemonHeaderCardSkeleton() {
  return (
    <Box width="100%">
      <Flex
        width="100%"
        justify="space-between"
        align="center"
        direction="row"
        margin="10px 0"
      >
        <Flex
          justifyContent="center"
          align="flex-end"
          direction="row"
          minWidth="210px"
        >
          <Skeleton width="210px" height="56px" />
        </Flex>

        <Flex
          justify="center"
          align="flex-end"
          direction="column"
        >
          <Skeleton width="100px" height="56px" />
        </Flex>

        <Flex
          justifyContent="center"
          align="flex-end"
          direction="row"
          minWidth="210px"
        >
          <Skeleton width="210px" height="56px" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default PokemonHeaderCardSkeleton;
