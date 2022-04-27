import React from 'react';

import normalizeString from 'shared/helpers/normalizeString';

export default function getDescriptionSelectOptions(descriptions) {
  return descriptions?.map(
    (description) => (
      <option
        key={description?.version?.name}
        value={description.flavor_text}
      >
        {normalizeString(description?.version?.name)}
      </option>
    ),
  );
}
