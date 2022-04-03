import React from 'react';

import { Center, Spinner } from '@chakra-ui/react';

function PageLoader() {
  return (
    <Center maxWidth={1080}>
      <Spinner />
    </Center>
  );
}

export default PageLoader;
