import React from 'react';
import { Box } from '@chakra-ui/react';

import getTypeColor from 'shared/helpers/getTypeColor';

import './BaseCard.css';

function BaseCard({ customClasses, types, children }) {
  return (
    <div className="card-container">
      <Box
        className={customClasses}
        style={{
          ...getTypeColor(types),
        }}
      >
        {children}
      </Box>
    </div>
  );
}

export default BaseCard;
