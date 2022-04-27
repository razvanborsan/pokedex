import React from 'react';
import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';

function SpriteSkeleton() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap="15px"
    >
      <Skeleton width="95px" height="25px" borderRadius="10px" />
      <SkeletonCircle size="120px" />
    </Flex>
  );
}

function SpritesCardSkeleton() {
  return (
    <Flex
      borderRadius="10px"
      margin="20px"
      width="1050px"
      height="195px"
      justify="center"
      align="center"
      direction="row"
      backgroundColor="#f2f2f2"
      border="0.5px"
      gap="50px"
      style={{
        border: '0.5px solid black',
      }}
    >
      <SpriteSkeleton />
      <SpriteSkeleton />
      <SpriteSkeleton />
      <SpriteSkeleton />
    </Flex>
  );
}

export default SpritesCardSkeleton;
