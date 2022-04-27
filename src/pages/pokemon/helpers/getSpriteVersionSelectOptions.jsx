import React from 'react';

import { normalizeGameName } from 'shared/helpers/normalizeString';

export default function getSpriteVersionSelectOptions(spritesVersions) {
  return (
    spritesVersions?.map(
      (version) => (
        <option
          key={version[0]}
          value={JSON.stringify(version[1])}
        >
          {normalizeGameName(version[0])}
        </option>
      ),
    )
  );
}
