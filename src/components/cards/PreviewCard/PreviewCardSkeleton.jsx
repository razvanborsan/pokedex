import React from 'react';
import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import TypeCardSkeleton from '../TypeCard/TypeCardSkeleton';

function PreviewCardSkeleton() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      backgroundColor="#f2f2f2"
      width={210}
      height={240}
      margin={5}
      borderRadius={10}
      border={0.5}
      gap={4}
      style={{
        border: '0.5px solid black',
      }}
    >
      <Skeleton height="20px" width="100px" />
      <Skeleton height="20px" width="50px" />
      <SkeletonCircle size="80px" />
      <Flex justify="center" align="center" direction="row" gap={5}>
        <TypeCardSkeleton />
        <TypeCardSkeleton />
      </Flex>
    </Flex>
  );
}

export default PreviewCardSkeleton;
