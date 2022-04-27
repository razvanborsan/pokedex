import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/react';

function StatSkeleton() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="row"
      borderRadius="15px"
      gap="20px"
    >
      <Skeleton width="130px" height="14px" />
      <Skeleton width="170px" height="14px" />
      <Skeleton width="60px" height="14px" />
    </Flex>
  );
}

function StatsCardSkeleton() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      backgroundColor="#f2f2f2"
      width="455px"
      height="200px"
      margin="20px"
      borderRadius="15px"
      gap="10px"
      style={{
        border: '0.5px solid black',
      }}
    >
      <StatSkeleton />
      <StatSkeleton />
      <StatSkeleton />
      <StatSkeleton />
      <StatSkeleton />
      <StatSkeleton />
    </Flex>
  );
}

export default StatsCardSkeleton;
