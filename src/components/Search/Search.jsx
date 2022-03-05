import React from 'react';

import './Search.css';

function Search({ placeholder, value, setValue }) {
  return (
    <input
      placeholder={placeholder}
      maxLength="33"
      className="searchBar"
      onChange={(event) => setValue(event.target.value)}
      value={value}
    />
  );
}

export default Search;
