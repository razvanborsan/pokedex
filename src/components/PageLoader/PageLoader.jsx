import React from 'react';

import { Center, Spinner } from '@chakra-ui/react';

function PageLoader() {
  return (
    <Center width="1080px">
      <Spinner />
    </Center>
  );
}

export default PageLoader;
