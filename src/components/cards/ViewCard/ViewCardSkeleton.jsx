import React from 'react';
import {
  Flex, Skeleton, SkeletonCircle,
} from '@chakra-ui/react';

import TypeCardSkeleton from 'components/cards/TypeCard/TypeCardSkeleton';

function InfoSkeleton() {
  return (
    <Flex justify="center" gap="5px" align="center" direction="column">
      <Skeleton height="22.5px" width="85px" />
      <Skeleton height="22.5px" width="85px" />
    </Flex>
  );
}

function ViewCardSkeleton() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      backgroundColor="#f2f2f2"
      width="535px"
      height="600px"
      margin="20px"
      borderRadius="15px"
      boxShadow="0 0 15px #BFBFBF"
      gap="30px"
      style={{
        border: '0.5px solid black',
      }}
    >
      <Flex
        justify="space-between"
        align="flex-start"
        width="100%"
        direciton="row"
        paddingLeft="10px"
        paddingRight="10px"
      >
        <Flex
          justsify="center"
          align="flex-start"
          gap="5px"
          marginLeft="20px"
          direction="column"
        >
          <Skeleton height="37.5px" width="150px" />
          <Skeleton height="25px" width="80px" />
        </Flex>
        <Flex
          justify="center"
          align="center"
          direction="row"
          marginRight="20px"
          gap="7.5px"
        >
          <TypeCardSkeleton />
          <TypeCardSkeleton />
        </Flex>
      </Flex>
      <SkeletonCircle size="350px" />
      <Flex
        justify="center"
        align="center"
        direction="row"
        width="100%"
        gap="3px"
        paddingLeft="10px"
        paddingRight="10px"
      >
        <InfoSkeleton />
        <InfoSkeleton />
        <InfoSkeleton />
        <InfoSkeleton />
        <InfoSkeleton />
      </Flex>
    </Flex>
  );
}

export default ViewCardSkeleton;
