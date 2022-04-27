import { Flex, Skeleton } from '@chakra-ui/react';
import React from 'react';

function EvolutionSkeleton() {
  return (
    <Skeleton width="220px" height="290px" borderRadius="10px" />
  );
}

function EvolutionDetailsSkeleton() {
  return (
    <Skeleton borderRadius="10px" width="140px" height="50px" />
  );
}

function EvolutionCardSkeleton() {
  return (
    <Flex
      borderRadius="10px"
      margin="20px"
      padding="30px"
      width="1050px"
      height="323px"
      justify="center"
      align="center"
      direction="row"
      backgroundColor="#f2f2f2"
      border="0.5px"
      gap={4}
      style={{
        border: '0.5px solid black',
      }}
    >
      <EvolutionSkeleton />
      <EvolutionDetailsSkeleton />
      <EvolutionSkeleton />
      <EvolutionDetailsSkeleton />
      <EvolutionSkeleton />
    </Flex>
  );
}

export default EvolutionCardSkeleton;
